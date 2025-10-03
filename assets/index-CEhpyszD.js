(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
})();
/**
 * @vue/shared v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function ks(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const re = {},
    Ft = [],
    Ye = () => {},
    fi = () => !1,
    Jn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Hs = e => e.startsWith("onUpdate:"),
    he = Object.assign,
    Vs = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Uo = Object.prototype.hasOwnProperty,
    Y = (e, t) => Uo.call(e, t),
    j = Array.isArray,
    jt = e => wn(e) === "[object Map]",
    Qn = e => wn(e) === "[object Set]",
    ar = e => wn(e) === "[object Date]",
    V = e => typeof e == "function",
    pe = e => typeof e == "string",
    Ze = e => typeof e == "symbol",
    te = e => e !== null && typeof e == "object",
    di = e => (te(e) || V(e)) && V(e.then) && V(e.catch),
    pi = Object.prototype.toString,
    wn = e => pi.call(e),
    Ko = e => wn(e).slice(8, -1),
    hi = e => wn(e) === "[object Object]",
    Bs = e => pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Zt = ks(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Yn = e => {
        const t = Object.create(null);
        return (n => t[n] || (t[n] = e(n)))
    },
    Wo = /-\w/g,
    Fe = Yn(e => e.replace(Wo, t => t.slice(1).toUpperCase())),
    qo = /\B([A-Z])/g,
    It = Yn(e => e.replace(qo, "-$1").toLowerCase()),
    Xn = Yn(e => e.charAt(0).toUpperCase() + e.slice(1)),
    us = Yn(e => e ? `on${Xn(e)}` : ""),
    _t = (e, t) => !Object.is(e, t),
    An = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    gi = (e, t, n, s = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: s,
            value: n
        })
    },
    Dn = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    Go = e => {
        const t = pe(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let ur;
const Zn = () => ur || (ur = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function fn(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const s = e[n],
                r = pe(s) ? Yo(s) : fn(s);
            if (r)
                for (const i in r) t[i] = r[i]
        }
        return t
    } else if (pe(e) || te(e)) return e
}
const zo = /;(?![^(]*\))/g,
    Jo = /:([^]+)/,
    Qo = /\/\*[^]*?\*\//g;

function Yo(e) {
    const t = {};
    return e.replace(Qo, "").split(zo).forEach(n => {
        if (n) {
            const s = n.split(Jo);
            s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
    }), t
}

function dn(e) {
    let t = "";
    if (pe(e)) t = e;
    else if (j(e))
        for (let n = 0; n < e.length; n++) {
            const s = dn(e[n]);
            s && (t += s + " ")
        } else if (te(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}
const Xo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Zo = ks(Xo);

function mi(e) {
    return !!e || e === ""
}

function el(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let s = 0; n && s < e.length; s++) n = es(e[s], t[s]);
    return n
}

function es(e, t) {
    if (e === t) return !0;
    let n = ar(e),
        s = ar(t);
    if (n || s) return n && s ? e.getTime() === t.getTime() : !1;
    if (n = Ze(e), s = Ze(t), n || s) return e === t;
    if (n = j(e), s = j(t), n || s) return n && s ? el(e, t) : !1;
    if (n = te(e), s = te(t), n || s) {
        if (!n || !s) return !1;
        const r = Object.keys(e).length,
            i = Object.keys(t).length;
        if (r !== i) return !1;
        for (const o in e) {
            const l = e.hasOwnProperty(o),
                c = t.hasOwnProperty(o);
            if (l && !c || !l && c || !es(e[o], t[o])) return !1
        }
    }
    return String(e) === String(t)
}

function tl(e, t) {
    return e.findIndex(n => es(n, t))
}
const yi = e => !!(e && e.__v_isRef === !0),
    fe = e => pe(e) ? e : e == null ? "" : j(e) || te(e) && (e.toString === pi || !V(e.toString)) ? yi(e) ? fe(e.value) : JSON.stringify(e, vi, 2) : String(e),
    vi = (e, t) => yi(t) ? vi(e, t.value) : jt(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [s, r], i) => (n[fs(s, i) + " =>"] = r, n), {})
    } : Qn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => fs(n))
    } : Ze(t) ? fs(t) : te(t) && !j(t) && !hi(t) ? String(t) : t,
    fs = (e, t = "") => {
        var n;
        return Ze(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Te;
class nl {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Te, !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Te;
            try {
                return Te = this, t()
            } finally {
                Te = n
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Te, Te = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Te = this.prevScope, this.prevScope = void 0)
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, s;
            for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0
        }
    }
}

function sl() {
    return Te
}
let le;
const ds = new WeakSet;
class _i {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && Te.active && Te.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wi(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, fr(this), Si(this);
        const t = le,
            n = He;
        le = this, He = !0;
        try {
            return this.fn()
        } finally {
            xi(this), le = t, He = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Ws(t);
            this.deps = this.depsTail = void 0, fr(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        Cs(this) && this.run()
    }
    get dirty() {
        return Cs(this)
    }
}
let bi = 0,
    en, tn;

function wi(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = tn, tn = e;
        return
    }
    e.next = en, en = e
}

function Us() {
    bi++
}

function Ks() {
    if (--bi > 0) return;
    if (tn) {
        let t = tn;
        for (tn = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; en;) {
        let t = en;
        for (en = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (s) {
                e || (e = s)
            }
            t = n
        }
    }
    if (e) throw e
}

function Si(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function xi(e) {
    let t, n = e.depsTail,
        s = n;
    for (; s;) {
        const r = s.prevDep;
        s.version === -1 ? (s === n && (n = r), Ws(s), rl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r
    }
    e.deps = t, e.depsTail = n
}

function Cs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Ci(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function Ci(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === pn) || (e.globalVersion = pn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Cs(e)))) return;
    e.flags |= 2;
    const t = e.dep,
        n = le,
        s = He;
    le = e, He = !0;
    try {
        Si(e);
        const r = e.fn(e._value);
        (t.version === 0 || _t(r, e._value)) && (e.flags |= 128, e._value = r, t.version++)
    } catch (r) {
        throw t.version++, r
    } finally {
        le = n, He = s, xi(e), e.flags &= -3
    }
}

function Ws(e, t = !1) {
    const {
        dep: n,
        prevSub: s,
        nextSub: r
    } = e;
    if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep) Ws(i, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function rl(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let He = !0;
const Ei = [];

function ct() {
    Ei.push(He), He = !1
}

function at() {
    const e = Ei.pop();
    He = e === void 0 ? !0 : e
}

function fr(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = le;
        le = void 0;
        try {
            t()
        } finally {
            le = n
        }
    }
}
let pn = 0;
class il {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class qs {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }
    track(t) {
        if (!le || !He || le === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== le) n = this.activeLink = new il(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, Ri(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const s = n.nextDep;
            s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = s)
        }
        return n
    }
    trigger(t) {
        this.version++, pn++, this.notify(t)
    }
    notify(t) {
        Us();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            Ks()
        }
    }
}

function Ri(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let s = t.deps; s; s = s.nextDep) Ri(s)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Es = new WeakMap,
    Tt = Symbol(""),
    Rs = Symbol(""),
    hn = Symbol("");

function _e(e, t, n) {
    if (He && le) {
        let s = Es.get(e);
        s || Es.set(e, s = new Map);
        let r = s.get(n);
        r || (s.set(n, r = new qs), r.map = s, r.key = n), r.track()
    }
}

function it(e, t, n, s, r, i) {
    const o = Es.get(e);
    if (!o) {
        pn++;
        return
    }
    const l = c => {
        c && c.trigger()
    };
    if (Us(), t === "clear") o.forEach(l);
    else {
        const c = j(e),
            f = c && Bs(n);
        if (c && n === "length") {
            const a = Number(s);
            o.forEach((d, h) => {
                (h === "length" || h === hn || !Ze(h) && h >= a) && l(d)
            })
        } else switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(hn)), t) {
            case "add":
                c ? f && l(o.get("length")) : (l(o.get(Tt)), jt(e) && l(o.get(Rs)));
                break;
            case "delete":
                c || (l(o.get(Tt)), jt(e) && l(o.get(Rs)));
                break;
            case "set":
                jt(e) && l(o.get(Tt));
                break
        }
    }
    Ks()
}

function Nt(e) {
    const t = q(e);
    return t === e ? t : (_e(t, "iterate", hn), De(e) ? t : t.map(me))
}

function ts(e) {
    return _e(e = q(e), "iterate", hn), e
}
const ol = {
    __proto__: null,
    [Symbol.iterator]() {
        return ps(this, Symbol.iterator, me)
    },
    concat(...e) {
        return Nt(this).concat(...e.map(t => j(t) ? Nt(t) : t))
    },
    entries() {
        return ps(this, "entries", e => (e[1] = me(e[1]), e))
    },
    every(e, t) {
        return tt(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return tt(this, "filter", e, t, n => n.map(me), arguments)
    },
    find(e, t) {
        return tt(this, "find", e, t, me, arguments)
    },
    findIndex(e, t) {
        return tt(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return tt(this, "findLast", e, t, me, arguments)
    },
    findLastIndex(e, t) {
        return tt(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return tt(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return hs(this, "includes", e)
    },
    indexOf(...e) {
        return hs(this, "indexOf", e)
    },
    join(e) {
        return Nt(this).join(e)
    },
    lastIndexOf(...e) {
        return hs(this, "lastIndexOf", e)
    },
    map(e, t) {
        return tt(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Jt(this, "pop")
    },
    push(...e) {
        return Jt(this, "push", e)
    },
    reduce(e, ...t) {
        return dr(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return dr(this, "reduceRight", e, t)
    },
    shift() {
        return Jt(this, "shift")
    },
    some(e, t) {
        return tt(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Jt(this, "splice", e)
    },
    toReversed() {
        return Nt(this).toReversed()
    },
    toSorted(e) {
        return Nt(this).toSorted(e)
    },
    toSpliced(...e) {
        return Nt(this).toSpliced(...e)
    },
    unshift(...e) {
        return Jt(this, "unshift", e)
    },
    values() {
        return ps(this, "values", me)
    }
};

function ps(e, t, n) {
    const s = ts(e),
        r = s[t]();
    return s !== e && !De(e) && (r._next = r.next, r.next = () => {
        const i = r._next();
        return i.done || (i.value = n(i.value)), i
    }), r
}
const ll = Array.prototype;

function tt(e, t, n, s, r, i) {
    const o = ts(e),
        l = o !== e && !De(e),
        c = o[t];
    if (c !== ll[t]) {
        const d = c.apply(e, i);
        return l ? me(d) : d
    }
    let f = n;
    o !== e && (l ? f = function(d, h) {
        return n.call(this, me(d), h, e)
    } : n.length > 2 && (f = function(d, h) {
        return n.call(this, d, h, e)
    }));
    const a = c.call(o, f, s);
    return l && r ? r(a) : a
}

function dr(e, t, n, s) {
    const r = ts(e);
    let i = n;
    return r !== e && (De(e) ? n.length > 3 && (i = function(o, l, c) {
        return n.call(this, o, l, c, e)
    }) : i = function(o, l, c) {
        return n.call(this, o, me(l), c, e)
    }), r[t](i, ...s)
}

function hs(e, t, n) {
    const s = q(e);
    _e(s, "iterate", hn);
    const r = s[t](...n);
    return (r === -1 || r === !1) && Js(n[0]) ? (n[0] = q(n[0]), s[t](...n)) : r
}

function Jt(e, t, n = []) {
    ct(), Us();
    const s = q(e)[t].apply(e, n);
    return Ks(), at(), s
}
const cl = ks("__proto__,__v_isRef,__isVue"),
    Pi = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ze));

function al(e) {
    Ze(e) || (e = String(e));
    const t = q(this);
    return _e(t, "has", e), t.hasOwnProperty(e)
}
class Ti {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, s) {
        if (n === "__v_skip") return t.__v_skip;
        const r = this._isReadonly,
            i = this._isShallow;
        if (n === "__v_isReactive") return !r;
        if (n === "__v_isReadonly") return r;
        if (n === "__v_isShallow") return i;
        if (n === "__v_raw") return s === (r ? i ? _l : Mi : i ? Oi : Ii).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
        const o = j(t);
        if (!r) {
            let c;
            if (o && (c = ol[n])) return c;
            if (n === "hasOwnProperty") return al
        }
        const l = Reflect.get(t, n, we(t) ? t : s);
        if ((Ze(n) ? Pi.has(n) : cl(n)) || (r || _e(t, "get", n), i)) return l;
        if (we(l)) {
            const c = o && Bs(n) ? l : l.value;
            return r && te(c) ? Ts(c) : c
        }
        return te(l) ? r ? Ts(l) : ns(l) : l
    }
}
class Ai extends Ti {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, s, r) {
        let i = t[n];
        if (!this._isShallow) {
            const c = bt(i);
            if (!De(s) && !bt(s) && (i = q(i), s = q(s)), !j(t) && we(i) && !we(s)) return c || (i.value = s), !0
        }
        const o = j(t) && Bs(n) ? Number(n) < t.length : Y(t, n),
            l = Reflect.set(t, n, s, we(t) ? t : r);
        return t === q(r) && (o ? _t(s, i) && it(t, "set", n, s) : it(t, "add", n, s)), l
    }
    deleteProperty(t, n) {
        const s = Y(t, n);
        t[n];
        const r = Reflect.deleteProperty(t, n);
        return r && s && it(t, "delete", n, void 0), r
    }
    has(t, n) {
        const s = Reflect.has(t, n);
        return (!Ze(n) || !Pi.has(n)) && _e(t, "has", n), s
    }
    ownKeys(t) {
        return _e(t, "iterate", j(t) ? "length" : Tt), Reflect.ownKeys(t)
    }
}
class ul extends Ti {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const fl = new Ai,
    dl = new ul,
    pl = new Ai(!0);
const Ps = e => e,
    En = e => Reflect.getPrototypeOf(e);

function hl(e, t, n) {
    return function(...s) {
        const r = this.__v_raw,
            i = q(r),
            o = jt(i),
            l = e === "entries" || e === Symbol.iterator && o,
            c = e === "keys" && o,
            f = r[e](...s),
            a = n ? Ps : t ? Fn : me;
        return !t && _e(i, "iterate", c ? Rs : Tt), {
            next() {
                const {
                    value: d,
                    done: h
                } = f.next();
                return h ? {
                    value: d,
                    done: h
                } : {
                    value: l ? [a(d[0]), a(d[1])] : a(d),
                    done: h
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Rn(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function gl(e, t) {
    const n = {
        get(r) {
            const i = this.__v_raw,
                o = q(i),
                l = q(r);
            e || (_t(r, l) && _e(o, "get", r), _e(o, "get", l));
            const {
                has: c
            } = En(o), f = t ? Ps : e ? Fn : me;
            if (c.call(o, r)) return f(i.get(r));
            if (c.call(o, l)) return f(i.get(l));
            i !== o && i.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && _e(q(r), "iterate", Tt), r.size
        },
        has(r) {
            const i = this.__v_raw,
                o = q(i),
                l = q(r);
            return e || (_t(r, l) && _e(o, "has", r), _e(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l)
        },
        forEach(r, i) {
            const o = this,
                l = o.__v_raw,
                c = q(l),
                f = t ? Ps : e ? Fn : me;
            return !e && _e(c, "iterate", Tt), l.forEach((a, d) => r.call(i, f(a), f(d), o))
        }
    };
    return he(n, e ? {
        add: Rn("add"),
        set: Rn("set"),
        delete: Rn("delete"),
        clear: Rn("clear")
    } : {
        add(r) {
            !t && !De(r) && !bt(r) && (r = q(r));
            const i = q(this);
            return En(i).has.call(i, r) || (i.add(r), it(i, "add", r, r)), this
        },
        set(r, i) {
            !t && !De(i) && !bt(i) && (i = q(i));
            const o = q(this),
                {
                    has: l,
                    get: c
                } = En(o);
            let f = l.call(o, r);
            f || (r = q(r), f = l.call(o, r));
            const a = c.call(o, r);
            return o.set(r, i), f ? _t(i, a) && it(o, "set", r, i) : it(o, "add", r, i), this
        },
        delete(r) {
            const i = q(this),
                {
                    has: o,
                    get: l
                } = En(i);
            let c = o.call(i, r);
            c || (r = q(r), c = o.call(i, r)), l && l.call(i, r);
            const f = i.delete(r);
            return c && it(i, "delete", r, void 0), f
        },
        clear() {
            const r = q(this),
                i = r.size !== 0,
                o = r.clear();
            return i && it(r, "clear", void 0, void 0), o
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        n[r] = hl(r, e, t)
    }), n
}

function Gs(e, t) {
    const n = gl(e, t);
    return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(Y(n, r) && r in s ? n : s, r, i)
}
const ml = {
        get: Gs(!1, !1)
    },
    yl = {
        get: Gs(!1, !0)
    },
    vl = {
        get: Gs(!0, !1)
    };
const Ii = new WeakMap,
    Oi = new WeakMap,
    Mi = new WeakMap,
    _l = new WeakMap;

function bl(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function wl(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : bl(Ko(e))
}

function ns(e) {
    return bt(e) ? e : zs(e, !1, fl, ml, Ii)
}

function Li(e) {
    return zs(e, !1, pl, yl, Oi)
}

function Ts(e) {
    return zs(e, !0, dl, vl, Mi)
}

function zs(e, t, n, s, r) {
    if (!te(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const i = wl(e);
    if (i === 0) return e;
    const o = r.get(e);
    if (o) return o;
    const l = new Proxy(e, i === 2 ? s : n);
    return r.set(e, l), l
}

function kt(e) {
    return bt(e) ? kt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function bt(e) {
    return !!(e && e.__v_isReadonly)
}

function De(e) {
    return !!(e && e.__v_isShallow)
}

function Js(e) {
    return e ? !!e.__v_raw : !1
}

function q(e) {
    const t = e && e.__v_raw;
    return t ? q(t) : e
}

function Sl(e) {
    return !Y(e, "__v_skip") && Object.isExtensible(e) && gi(e, "__v_skip", !0), e
}
const me = e => te(e) ? ns(e) : e,
    Fn = e => te(e) ? Ts(e) : e;

function we(e) {
    return e ? e.__v_isRef === !0 : !1
}

function xl(e) {
    return Ni(e, !1)
}

function Cl(e) {
    return Ni(e, !0)
}

function Ni(e, t) {
    return we(e) ? e : new El(e, t)
}
class El {
    constructor(t, n) {
        this.dep = new qs, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : q(t), this._value = n ? t : me(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            s = this.__v_isShallow || De(t) || bt(t);
        t = s ? t : q(t), _t(t, n) && (this._rawValue = t, this._value = s ? t : me(t), this.dep.trigger())
    }
}

function Ht(e) {
    return we(e) ? e.value : e
}
const Rl = {
    get: (e, t, n) => t === "__v_raw" ? e : Ht(Reflect.get(e, t, n)),
    set: (e, t, n, s) => {
        const r = e[t];
        return we(r) && !we(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s)
    }
};

function $i(e) {
    return kt(e) ? e : new Proxy(e, Rl)
}
class Pl {
    constructor(t, n, s) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && le !== this) return wi(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return Ci(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Tl(e, t, n = !1) {
    let s, r;
    return V(e) ? s = e : (s = e.get, r = e.set), new Pl(s, r, n)
}
const Pn = {},
    jn = new WeakMap;
let Et;

function Al(e, t = !1, n = Et) {
    if (n) {
        let s = jn.get(n);
        s || jn.set(n, s = []), s.push(e)
    }
}

function Il(e, t, n = re) {
    const {
        immediate: s,
        deep: r,
        once: i,
        scheduler: o,
        augmentJob: l,
        call: c
    } = n, f = L => r ? L : De(L) || r === !1 || r === 0 ? ot(L, 1) : ot(L);
    let a, d, h, m, E = !1,
        A = !1;
    if (we(e) ? (d = () => e.value, E = De(e)) : kt(e) ? (d = () => f(e), E = !0) : j(e) ? (A = !0, E = e.some(L => kt(L) || De(L)), d = () => e.map(L => {
            if (we(L)) return L.value;
            if (kt(L)) return f(L);
            if (V(L)) return c ? c(L, 2) : L()
        })) : V(e) ? t ? d = c ? () => c(e, 2) : e : d = () => {
            if (h) {
                ct();
                try {
                    h()
                } finally {
                    at()
                }
            }
            const L = Et;
            Et = a;
            try {
                return c ? c(e, 3, [m]) : e(m)
            } finally {
                Et = L
            }
        } : d = Ye, t && r) {
        const L = d,
            K = r === !0 ? 1 / 0 : r;
        d = () => ot(L(), K)
    }
    const B = sl(),
        N = () => {
            a.stop(), B && B.active && Vs(B.effects, a)
        };
    if (i && t) {
        const L = t;
        t = (...K) => {
            L(...K), N()
        }
    }
    let M = A ? new Array(e.length).fill(Pn) : Pn;
    const D = L => {
        if (!(!(a.flags & 1) || !a.dirty && !L))
            if (t) {
                const K = a.run();
                if (r || E || (A ? K.some((ne, Z) => _t(ne, M[Z])) : _t(K, M))) {
                    h && h();
                    const ne = Et;
                    Et = a;
                    try {
                        const Z = [K, M === Pn ? void 0 : A && M[0] === Pn ? [] : M, m];
                        M = K, c ? c(t, 3, Z) : t(...Z)
                    } finally {
                        Et = ne
                    }
                }
            } else a.run()
    };
    return l && l(D), a = new _i(d), a.scheduler = o ? () => o(D, !1) : D, m = L => Al(L, !1, a), h = a.onStop = () => {
        const L = jn.get(a);
        if (L) {
            if (c) c(L, 4);
            else
                for (const K of L) K();
            jn.delete(a)
        }
    }, t ? s ? D(!0) : M = a.run() : o ? o(D.bind(null, !0), !0) : a.run(), N.pause = a.pause.bind(a), N.resume = a.resume.bind(a), N.stop = N, N
}

function ot(e, t = 1 / 0, n) {
    if (t <= 0 || !te(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, we(e)) ot(e.value, t, n);
    else if (j(e))
        for (let s = 0; s < e.length; s++) ot(e[s], t, n);
    else if (Qn(e) || jt(e)) e.forEach(s => {
        ot(s, t, n)
    });
    else if (hi(e)) {
        for (const s in e) ot(e[s], t, n);
        for (const s of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, s) && ot(e[s], t, n)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function Sn(e, t, n, s) {
    try {
        return s ? e(...s) : e()
    } catch (r) {
        ss(r, t, n)
    }
}

function Ve(e, t, n, s) {
    if (V(e)) {
        const r = Sn(e, t, n, s);
        return r && di(r) && r.catch(i => {
            ss(i, t, n)
        }), r
    }
    if (j(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(Ve(e[i], t, n, s));
        return r
    }
}

function ss(e, t, n, s = !0) {
    const r = t ? t.vnode : null,
        {
            errorHandler: i,
            throwUnhandledErrorInProduction: o
        } = t && t.appContext.config || re;
    if (t) {
        let l = t.parent;
        const c = t.proxy,
            f = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; l;) {
            const a = l.ec;
            if (a) {
                for (let d = 0; d < a.length; d++)
                    if (a[d](e, c, f) === !1) return
            }
            l = l.parent
        }
        if (i) {
            ct(), Sn(i, null, 10, [e, c, f]), at();
            return
        }
    }
    Ol(e, n, r, s, o)
}

function Ol(e, t, n, s = !0, r = !1) {
    if (r) throw e;
    console.error(e)
}
const xe = [];
let Je = -1;
const Vt = [];
let gt = null,
    $t = 0;
const Di = Promise.resolve();
let kn = null;

function Qs(e) {
    const t = kn || Di;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ml(e) {
    let t = Je + 1,
        n = xe.length;
    for (; t < n;) {
        const s = t + n >>> 1,
            r = xe[s],
            i = gn(r);
        i < e || i === e && r.flags & 2 ? t = s + 1 : n = s
    }
    return t
}

function Ys(e) {
    if (!(e.flags & 1)) {
        const t = gn(e),
            n = xe[xe.length - 1];
        !n || !(e.flags & 2) && t >= gn(n) ? xe.push(e) : xe.splice(Ml(t), 0, e), e.flags |= 1, Fi()
    }
}

function Fi() {
    kn || (kn = Di.then(ki))
}

function Ll(e) {
    j(e) ? Vt.push(...e) : gt && e.id === -1 ? gt.splice($t + 1, 0, e) : e.flags & 1 || (Vt.push(e), e.flags |= 1), Fi()
}

function pr(e, t, n = Je + 1) {
    for (; n < xe.length; n++) {
        const s = xe[n];
        if (s && s.flags & 2) {
            if (e && s.id !== e.uid) continue;
            xe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2)
        }
    }
}

function ji(e) {
    if (Vt.length) {
        const t = [...new Set(Vt)].sort((n, s) => gn(n) - gn(s));
        if (Vt.length = 0, gt) {
            gt.push(...t);
            return
        }
        for (gt = t, $t = 0; $t < gt.length; $t++) {
            const n = gt[$t];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        gt = null, $t = 0
    }
}
const gn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function ki(e) {
    try {
        for (Je = 0; Je < xe.length; Je++) {
            const t = xe[Je];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Sn(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Je < xe.length; Je++) {
            const t = xe[Je];
            t && (t.flags &= -2)
        }
        Je = -1, xe.length = 0, ji(), kn = null, (xe.length || Vt.length) && ki()
    }
}
let Me = null,
    Hi = null;

function Hn(e) {
    const t = Me;
    return Me = e, Hi = e && e.type.__scopeId || null, t
}

function vt(e, t = Me, n) {
    if (!t || e._n) return e;
    const s = (...r) => {
        s._d && Un(-1);
        const i = Hn(t);
        let o;
        try {
            o = e(...r)
        } finally {
            Hn(i), s._d && Un(1)
        }
        return o
    };
    return s._n = !0, s._c = !0, s._d = !0, s
}

function je(e, t) {
    if (Me === null) return e;
    const n = cs(Me),
        s = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, o, l, c = re] = t[r];
        i && (V(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && ot(o), s.push({
            dir: i,
            instance: n,
            value: o,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function St(e, t, n, s) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let c = l.dir[s];
        c && (ct(), Ve(c, n, 8, [e.el, l, e, t]), at())
    }
}
const Nl = Symbol("_vte"),
    Vi = e => e.__isTeleport,
    rt = Symbol("_leaveCb"),
    Tn = Symbol("_enterCb");

function Bi() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Qi(() => {
        e.isMounted = !0
    }), Xi(() => {
        e.isUnmounting = !0
    }), e
}
const $e = [Function, Array],
    Ui = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: $e,
        onEnter: $e,
        onAfterEnter: $e,
        onEnterCancelled: $e,
        onBeforeLeave: $e,
        onLeave: $e,
        onAfterLeave: $e,
        onLeaveCancelled: $e,
        onBeforeAppear: $e,
        onAppear: $e,
        onAfterAppear: $e,
        onAppearCancelled: $e
    },
    Ki = e => {
        const t = e.subTree;
        return t.component ? Ki(t.component) : t
    },
    $l = {
        name: "BaseTransition",
        props: Ui,
        setup(e, {
            slots: t
        }) {
            const n = nr(),
                s = Bi();
            return () => {
                const r = t.default && Xs(t.default(), !0);
                if (!r || !r.length) return;
                const i = Wi(r),
                    o = q(e),
                    {
                        mode: l
                    } = o;
                if (s.isLeaving) return gs(i);
                const c = hr(i);
                if (!c) return gs(i);
                let f = mn(c, o, s, n, d => f = d);
                c.type !== Ce && At(c, f);
                let a = n.subTree && hr(n.subTree);
                if (a && a.type !== Ce && !Rt(a, c) && Ki(n).type !== Ce) {
                    let d = mn(a, o, s, n);
                    if (At(a, d), l === "out-in" && c.type !== Ce) return s.isLeaving = !0, d.afterLeave = () => {
                        s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, a = void 0
                    }, gs(i);
                    l === "in-out" && c.type !== Ce ? d.delayLeave = (h, m, E) => {
                        const A = qi(s, a);
                        A[String(a.key)] = a, h[rt] = () => {
                            m(), h[rt] = void 0, delete f.delayedLeave, a = void 0
                        }, f.delayedLeave = () => {
                            E(), delete f.delayedLeave, a = void 0
                        }
                    } : a = void 0
                } else a && (a = void 0);
                return i
            }
        }
    };

function Wi(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== Ce) {
                t = n;
                break
            }
    }
    return t
}
const Dl = $l;

function qi(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let s = n.get(t.type);
    return s || (s = Object.create(null), n.set(t.type, s)), s
}

function mn(e, t, n, s, r) {
    const {
        appear: i,
        mode: o,
        persisted: l = !1,
        onBeforeEnter: c,
        onEnter: f,
        onAfterEnter: a,
        onEnterCancelled: d,
        onBeforeLeave: h,
        onLeave: m,
        onAfterLeave: E,
        onLeaveCancelled: A,
        onBeforeAppear: B,
        onAppear: N,
        onAfterAppear: M,
        onAppearCancelled: D
    } = t, L = String(e.key), K = qi(n, e), ne = (U, G) => {
        U && Ve(U, s, 9, G)
    }, Z = (U, G) => {
        const ie = G[1];
        ne(U, G), j(U) ? U.every(O => O.length <= 1) && ie() : U.length <= 1 && ie()
    }, ve = {
        mode: o,
        persisted: l,
        beforeEnter(U) {
            let G = c;
            if (!n.isMounted)
                if (i) G = B || c;
                else return;
            U[rt] && U[rt](!0);
            const ie = K[L];
            ie && Rt(e, ie) && ie.el[rt] && ie.el[rt](), ne(G, [U])
        },
        enter(U) {
            let G = f,
                ie = a,
                O = d;
            if (!n.isMounted)
                if (i) G = N || f, ie = M || a, O = D || d;
                else return;
            let z = !1;
            const ge = U[Tn] = Ae => {
                z || (z = !0, Ae ? ne(O, [U]) : ne(ie, [U]), ve.delayedLeave && ve.delayedLeave(), U[Tn] = void 0)
            };
            G ? Z(G, [U, ge]) : ge()
        },
        leave(U, G) {
            const ie = String(e.key);
            if (U[Tn] && U[Tn](!0), n.isUnmounting) return G();
            ne(h, [U]);
            let O = !1;
            const z = U[rt] = ge => {
                O || (O = !0, G(), ge ? ne(A, [U]) : ne(E, [U]), U[rt] = void 0, K[ie] === e && delete K[ie])
            };
            K[ie] = e, m ? Z(m, [U, z]) : z()
        },
        clone(U) {
            const G = mn(U, t, n, s, r);
            return r && r(G), G
        }
    };
    return ve
}

function gs(e) {
    if (rs(e)) return e = wt(e), e.children = null, e
}

function hr(e) {
    if (!rs(e)) return Vi(e.type) && e.children ? Wi(e.children) : e;
    if (e.component) return e.component.subTree;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && V(n.default)) return n.default()
    }
}

function At(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, At(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Xs(e, t = !1, n) {
    let s = [],
        r = 0;
    for (let i = 0; i < e.length; i++) {
        let o = e[i];
        const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
        o.type === ye ? (o.patchFlag & 128 && r++, s = s.concat(Xs(o.children, t, l))) : (t || o.type !== Ce) && s.push(l != null ? wt(o, {
            key: l
        }) : o)
    }
    if (r > 1)
        for (let i = 0; i < s.length; i++) s[i].patchFlag = -2;
    return s
}

function Gi(e, t) {
    return V(e) ? he({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function zi(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
const Vn = new WeakMap;

function nn(e, t, n, s, r = !1) {
    if (j(e)) {
        e.forEach((E, A) => nn(E, t && (j(t) ? t[A] : t), n, s, r));
        return
    }
    if (sn(s) && !r) {
        s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && nn(e, t, n, s.component.subTree);
        return
    }
    const i = s.shapeFlag & 4 ? cs(s.component) : s.el,
        o = r ? null : i,
        {
            i: l,
            r: c
        } = e,
        f = t && t.r,
        a = l.refs === re ? l.refs = {} : l.refs,
        d = l.setupState,
        h = q(d),
        m = d === re ? fi : E => Y(h, E);
    if (f != null && f !== c) {
        if (gr(t), pe(f)) a[f] = null, m(f) && (d[f] = null);
        else if (we(f)) {
            f.value = null;
            const E = t;
            E.k && (a[E.k] = null)
        }
    }
    if (V(c)) Sn(c, l, 12, [o, a]);
    else {
        const E = pe(c),
            A = we(c);
        if (E || A) {
            const B = () => {
                if (e.f) {
                    const N = E ? m(c) ? d[c] : a[c] : c.value;
                    if (r) j(N) && Vs(N, i);
                    else if (j(N)) N.includes(i) || N.push(i);
                    else if (E) a[c] = [i], m(c) && (d[c] = a[c]);
                    else {
                        const M = [i];
                        c.value = M, e.k && (a[e.k] = M)
                    }
                } else E ? (a[c] = o, m(c) && (d[c] = o)) : A && (c.value = o, e.k && (a[e.k] = o))
            };
            if (o) {
                const N = () => {
                    B(), Vn.delete(e)
                };
                N.id = -1, Vn.set(e, N), Oe(N, n)
            } else gr(e), B()
        }
    }
}

function gr(e) {
    const t = Vn.get(e);
    t && (t.flags |= 8, Vn.delete(e))
}
Zn().requestIdleCallback;
Zn().cancelIdleCallback;
const sn = e => !!e.type.__asyncLoader,
    rs = e => e.type.__isKeepAlive;

function Fl(e, t) {
    Ji(e, "a", t)
}

function jl(e, t) {
    Ji(e, "da", t)
}

function Ji(e, t, n = be) {
    const s = e.__wdc || (e.__wdc = () => {
        let r = n;
        for (; r;) {
            if (r.isDeactivated) return;
            r = r.parent
        }
        return e()
    });
    if (is(t, s, n), n) {
        let r = n.parent;
        for (; r && r.parent;) rs(r.parent.vnode) && kl(s, t, n, r), r = r.parent
    }
}

function kl(e, t, n, s) {
    const r = is(t, e, s, !0);
    Zi(() => {
        Vs(s[t], r)
    }, n)
}

function is(e, t, n = be, s = !1) {
    if (n) {
        const r = n[e] || (n[e] = []),
            i = t.__weh || (t.__weh = (...o) => {
                ct();
                const l = xn(n),
                    c = Ve(t, n, e, o);
                return l(), at(), c
            });
        return s ? r.unshift(i) : r.push(i), i
    }
}
const ut = e => (t, n = be) => {
        (!vn || e === "sp") && is(e, (...s) => t(...s), n)
    },
    Hl = ut("bm"),
    Qi = ut("m"),
    Vl = ut("bu"),
    Yi = ut("u"),
    Xi = ut("bum"),
    Zi = ut("um"),
    Bl = ut("sp"),
    Ul = ut("rtg"),
    Kl = ut("rtc");

function Wl(e, t = be) {
    is("ec", e, t)
}
const ql = "components";

function rn(e, t) {
    return zl(ql, e, !0, t) || e
}
const Gl = Symbol.for("v-ndc");

function zl(e, t, n = !0, s = !1) {
    const r = Me || be;
    if (r) {
        const i = r.type;
        {
            const l = Fc(i, !1);
            if (l && (l === t || l === Fe(t) || l === Xn(Fe(t)))) return i
        }
        const o = mr(r[e] || i[e], t) || mr(r.appContext[e], t);
        return !o && s ? i : o
    }
}

function mr(e, t) {
    return e && (e[t] || e[Fe(t)] || e[Xn(Fe(t))])
}

function Kt(e, t, n, s) {
    let r;
    const i = n,
        o = j(e);
    if (o || pe(e)) {
        const l = o && kt(e);
        let c = !1,
            f = !1;
        l && (c = !De(e), f = bt(e), e = ts(e)), r = new Array(e.length);
        for (let a = 0, d = e.length; a < d; a++) r[a] = t(c ? f ? Fn(me(e[a])) : me(e[a]) : e[a], a, void 0, i)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i)
    } else if (te(e))
        if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, f = l.length; c < f; c++) {
                const a = l[c];
                r[c] = t(e[a], a, c, i)
            }
        }
    else r = [];
    return r
}
const As = e => e ? bo(e) ? cs(e) : As(e.parent) : null,
    on = he(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => As(e.parent),
        $root: e => As(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => to(e),
        $forceUpdate: e => e.f || (e.f = () => {
            Ys(e.update)
        }),
        $nextTick: e => e.n || (e.n = Qs.bind(e.proxy)),
        $watch: e => gc.bind(e)
    }),
    ms = (e, t) => e !== re && !e.__isScriptSetup && Y(e, t),
    Jl = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: s,
                data: r,
                props: i,
                accessCache: o,
                type: l,
                appContext: c
            } = e;
            let f;
            if (t[0] !== "$") {
                const m = o[t];
                if (m !== void 0) switch (m) {
                    case 1:
                        return s[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return i[t]
                } else {
                    if (ms(s, t)) return o[t] = 1, s[t];
                    if (r !== re && Y(r, t)) return o[t] = 2, r[t];
                    if ((f = e.propsOptions[0]) && Y(f, t)) return o[t] = 3, i[t];
                    if (n !== re && Y(n, t)) return o[t] = 4, n[t];
                    Is && (o[t] = 0)
                }
            }
            const a = on[t];
            let d, h;
            if (a) return t === "$attrs" && _e(e.attrs, "get", ""), a(e);
            if ((d = l.__cssModules) && (d = d[t])) return d;
            if (n !== re && Y(n, t)) return o[t] = 4, n[t];
            if (h = c.config.globalProperties, Y(h, t)) return h[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: s,
                setupState: r,
                ctx: i
            } = e;
            return ms(r, t) ? (r[t] = n, !0) : s !== re && Y(s, t) ? (s[t] = n, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: s,
                appContext: r,
                propsOptions: i,
                type: o
            }
        }, l) {
            let c, f;
            return !!(n[l] || e !== re && l[0] !== "$" && Y(e, l) || ms(t, l) || (c = i[0]) && Y(c, l) || Y(s, l) || Y(on, l) || Y(r.config.globalProperties, l) || (f = o.__cssModules) && f[l])
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function yr(e) {
    return j(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let Is = !0;

function Ql(e) {
    const t = to(e),
        n = e.proxy,
        s = e.ctx;
    Is = !1, t.beforeCreate && vr(t.beforeCreate, e, "bc");
    const {
        data: r,
        computed: i,
        methods: o,
        watch: l,
        provide: c,
        inject: f,
        created: a,
        beforeMount: d,
        mounted: h,
        beforeUpdate: m,
        updated: E,
        activated: A,
        deactivated: B,
        beforeDestroy: N,
        beforeUnmount: M,
        destroyed: D,
        unmounted: L,
        render: K,
        renderTracked: ne,
        renderTriggered: Z,
        errorCaptured: ve,
        serverPrefetch: U,
        expose: G,
        inheritAttrs: ie,
        components: O,
        directives: z,
        filters: ge
    } = t;
    if (f && Yl(f, s, null), o)
        for (const ee in o) {
            const J = o[ee];
            V(J) && (s[ee] = J.bind(n))
        }
    if (r) {
        const ee = r.call(n, n);
        te(ee) && (e.data = ns(ee))
    }
    if (Is = !0, i)
        for (const ee in i) {
            const J = i[ee],
                et = V(J) ? J.bind(n, n) : V(J.get) ? J.get.bind(n, n) : Ye,
                ft = !V(J) && V(J.set) ? J.set.bind(n) : Ye,
                Ue = ke({
                    get: et,
                    set: ft
                });
            Object.defineProperty(s, ee, {
                enumerable: !0,
                configurable: !0,
                get: () => Ue.value,
                set: Ee => Ue.value = Ee
            })
        }
    if (l)
        for (const ee in l) eo(l[ee], s, n, ee);
    if (c) {
        const ee = V(c) ? c.call(n) : c;
        Reflect.ownKeys(ee).forEach(J => {
            In(J, ee[J])
        })
    }
    a && vr(a, e, "c");

    function de(ee, J) {
        j(J) ? J.forEach(et => ee(et.bind(n))) : J && ee(J.bind(n))
    }
    if (de(Hl, d), de(Qi, h), de(Vl, m), de(Yi, E), de(Fl, A), de(jl, B), de(Wl, ve), de(Kl, ne), de(Ul, Z), de(Xi, M), de(Zi, L), de(Bl, U), j(G))
        if (G.length) {
            const ee = e.exposed || (e.exposed = {});
            G.forEach(J => {
                Object.defineProperty(ee, J, {
                    get: () => n[J],
                    set: et => n[J] = et,
                    enumerable: !0
                })
            })
        } else e.exposed || (e.exposed = {});
    K && e.render === Ye && (e.render = K), ie != null && (e.inheritAttrs = ie), O && (e.components = O), z && (e.directives = z), U && zi(e)
}

function Yl(e, t, n = Ye) {
    j(e) && (e = Os(e));
    for (const s in e) {
        const r = e[s];
        let i;
        te(r) ? "default" in r ? i = Xe(r.from || s, r.default, !0) : i = Xe(r.from || s) : i = Xe(r), we(i) ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: o => i.value = o
        }) : t[s] = i
    }
}

function vr(e, t, n) {
    Ve(j(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function eo(e, t, n, s) {
    let r = s.includes(".") ? go(n, s) : () => n[s];
    if (pe(e)) {
        const i = t[e];
        V(i) && On(r, i)
    } else if (V(e)) On(r, e.bind(n));
    else if (te(e))
        if (j(e)) e.forEach(i => eo(i, t, n, s));
        else {
            const i = V(e.handler) ? e.handler.bind(n) : t[e.handler];
            V(i) && On(r, i, e)
        }
}

function to(e) {
    const t = e.type,
        {
            mixins: n,
            extends: s
        } = t,
        {
            mixins: r,
            optionsCache: i,
            config: {
                optionMergeStrategies: o
            }
        } = e.appContext,
        l = i.get(t);
    let c;
    return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(f => Bn(c, f, o, !0)), Bn(c, t, o)), te(t) && i.set(t, c), c
}

function Bn(e, t, n, s = !1) {
    const {
        mixins: r,
        extends: i
    } = t;
    i && Bn(e, i, n, !0), r && r.forEach(o => Bn(e, o, n, !0));
    for (const o in t)
        if (!(s && o === "expose")) {
            const l = Xl[o] || n && n[o];
            e[o] = l ? l(e[o], t[o]) : t[o]
        } return e
}
const Xl = {
    data: _r,
    props: br,
    emits: br,
    methods: Xt,
    computed: Xt,
    beforeCreate: Se,
    created: Se,
    beforeMount: Se,
    mounted: Se,
    beforeUpdate: Se,
    updated: Se,
    beforeDestroy: Se,
    beforeUnmount: Se,
    destroyed: Se,
    unmounted: Se,
    activated: Se,
    deactivated: Se,
    errorCaptured: Se,
    serverPrefetch: Se,
    components: Xt,
    directives: Xt,
    watch: ec,
    provide: _r,
    inject: Zl
};

function _r(e, t) {
    return t ? e ? function() {
        return he(V(e) ? e.call(this, this) : e, V(t) ? t.call(this, this) : t)
    } : t : e
}

function Zl(e, t) {
    return Xt(Os(e), Os(t))
}

function Os(e) {
    if (j(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Se(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Xt(e, t) {
    return e ? he(Object.create(null), e, t) : t
}

function br(e, t) {
    return e ? j(e) && j(t) ? [...new Set([...e, ...t])] : he(Object.create(null), yr(e), yr(t ?? {})) : t
}

function ec(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = he(Object.create(null), e);
    for (const s in t) n[s] = Se(e[s], t[s]);
    return n
}

function no() {
    return {
        app: null,
        config: {
            isNativeTag: fi,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let tc = 0;

function nc(e, t) {
    return function(s, r = null) {
        V(s) || (s = he({}, s)), r != null && !te(r) && (r = null);
        const i = no(),
            o = new WeakSet,
            l = [];
        let c = !1;
        const f = i.app = {
            _uid: tc++,
            _component: s,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: kc,
            get config() {
                return i.config
            },
            set config(a) {},
            use(a, ...d) {
                return o.has(a) || (a && V(a.install) ? (o.add(a), a.install(f, ...d)) : V(a) && (o.add(a), a(f, ...d))), f
            },
            mixin(a) {
                return i.mixins.includes(a) || i.mixins.push(a), f
            },
            component(a, d) {
                return d ? (i.components[a] = d, f) : i.components[a]
            },
            directive(a, d) {
                return d ? (i.directives[a] = d, f) : i.directives[a]
            },
            mount(a, d, h) {
                if (!c) {
                    const m = f._ceVNode || ue(s, r);
                    return m.appContext = i, h === !0 ? h = "svg" : h === !1 && (h = void 0), e(m, a, h), c = !0, f._container = a, a.__vue_app__ = f, cs(m.component)
                }
            },
            onUnmount(a) {
                l.push(a)
            },
            unmount() {
                c && (Ve(l, f._instance, 16), e(null, f._container), delete f._container.__vue_app__)
            },
            provide(a, d) {
                return i.provides[a] = d, f
            },
            runWithContext(a) {
                const d = Bt;
                Bt = f;
                try {
                    return a()
                } finally {
                    Bt = d
                }
            }
        };
        return f
    }
}
let Bt = null;

function In(e, t) {
    if (be) {
        let n = be.provides;
        const s = be.parent && be.parent.provides;
        s === n && (n = be.provides = Object.create(s)), n[e] = t
    }
}

function Xe(e, t, n = !1) {
    const s = nr();
    if (s || Bt) {
        let r = Bt ? Bt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return n && V(t) ? t.call(s && s.proxy) : t
    }
}
const so = {},
    ro = () => Object.create(so),
    io = e => Object.getPrototypeOf(e) === so;

function sc(e, t, n, s = !1) {
    const r = {},
        i = ro();
    e.propsDefaults = Object.create(null), oo(e, t, r, i);
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    n ? e.props = s ? r : Li(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i
}

function rc(e, t, n, s) {
    const {
        props: r,
        attrs: i,
        vnode: {
            patchFlag: o
        }
    } = e, l = q(r), [c] = e.propsOptions;
    let f = !1;
    if ((s || o > 0) && !(o & 16)) {
        if (o & 8) {
            const a = e.vnode.dynamicProps;
            for (let d = 0; d < a.length; d++) {
                let h = a[d];
                if (os(e.emitsOptions, h)) continue;
                const m = t[h];
                if (c)
                    if (Y(i, h)) m !== i[h] && (i[h] = m, f = !0);
                    else {
                        const E = Fe(h);
                        r[E] = Ms(c, l, E, m, e, !1)
                    }
                else m !== i[h] && (i[h] = m, f = !0)
            }
        }
    } else {
        oo(e, t, r, i) && (f = !0);
        let a;
        for (const d in l)(!t || !Y(t, d) && ((a = It(d)) === d || !Y(t, a))) && (c ? n && (n[d] !== void 0 || n[a] !== void 0) && (r[d] = Ms(c, l, d, void 0, e, !0)) : delete r[d]);
        if (i !== l)
            for (const d in i)(!t || !Y(t, d)) && (delete i[d], f = !0)
    }
    f && it(e.attrs, "set", "")
}

function oo(e, t, n, s) {
    const [r, i] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let c in t) {
            if (Zt(c)) continue;
            const f = t[c];
            let a;
            r && Y(r, a = Fe(c)) ? !i || !i.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : os(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0)
        }
    if (i) {
        const c = q(n),
            f = l || re;
        for (let a = 0; a < i.length; a++) {
            const d = i[a];
            n[d] = Ms(r, c, d, f[d], e, !Y(f, d))
        }
    }
    return o
}

function Ms(e, t, n, s, r, i) {
    const o = e[n];
    if (o != null) {
        const l = Y(o, "default");
        if (l && s === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && V(c)) {
                const {
                    propsDefaults: f
                } = r;
                if (n in f) s = f[n];
                else {
                    const a = xn(r);
                    s = f[n] = c.call(null, t), a()
                }
            } else s = c;
            r.ce && r.ce._setProp(n, s)
        }
        o[0] && (i && !l ? s = !1 : o[1] && (s === "" || s === It(n)) && (s = !0))
    }
    return s
}
const ic = new WeakMap;

function lo(e, t, n = !1) {
    const s = n ? ic : t.propsCache,
        r = s.get(e);
    if (r) return r;
    const i = e.props,
        o = {},
        l = [];
    let c = !1;
    if (!V(e)) {
        const a = d => {
            c = !0;
            const [h, m] = lo(d, t, !0);
            he(o, h), m && l.push(...m)
        };
        !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a)
    }
    if (!i && !c) return te(e) && s.set(e, Ft), Ft;
    if (j(i))
        for (let a = 0; a < i.length; a++) {
            const d = Fe(i[a]);
            wr(d) && (o[d] = re)
        } else if (i)
            for (const a in i) {
                const d = Fe(a);
                if (wr(d)) {
                    const h = i[a],
                        m = o[d] = j(h) || V(h) ? {
                            type: h
                        } : he({}, h),
                        E = m.type;
                    let A = !1,
                        B = !0;
                    if (j(E))
                        for (let N = 0; N < E.length; ++N) {
                            const M = E[N],
                                D = V(M) && M.name;
                            if (D === "Boolean") {
                                A = !0;
                                break
                            } else D === "String" && (B = !1)
                        } else A = V(E) && E.name === "Boolean";
                    m[0] = A, m[1] = B, (A || Y(m, "default")) && l.push(d)
                }
            }
    const f = [o, l];
    return te(e) && s.set(e, f), f
}

function wr(e) {
    return e[0] !== "$" && !Zt(e)
}
const Zs = e => e === "_" || e === "_ctx" || e === "$stable",
    er = e => j(e) ? e.map(Qe) : [Qe(e)],
    oc = (e, t, n) => {
        if (t._n) return t;
        const s = vt((...r) => er(t(...r)), n);
        return s._c = !1, s
    },
    co = (e, t, n) => {
        const s = e._ctx;
        for (const r in e) {
            if (Zs(r)) continue;
            const i = e[r];
            if (V(i)) t[r] = oc(r, i, s);
            else if (i != null) {
                const o = er(i);
                t[r] = () => o
            }
        }
    },
    ao = (e, t) => {
        const n = er(t);
        e.slots.default = () => n
    },
    uo = (e, t, n) => {
        for (const s in t)(n || !Zs(s)) && (e[s] = t[s])
    },
    lc = (e, t, n) => {
        const s = e.slots = ro();
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (uo(s, t, n), n && gi(s, "_", r, !0)) : co(t, s)
        } else t && ao(e, t)
    },
    cc = (e, t, n) => {
        const {
            vnode: s,
            slots: r
        } = e;
        let i = !0,
            o = re;
        if (s.shapeFlag & 32) {
            const l = t._;
            l ? n && l === 1 ? i = !1 : uo(r, t, n) : (i = !t.$stable, co(t, r)), o = t
        } else t && (ao(e, t), o = {
            default: 1
        });
        if (i)
            for (const l in r) !Zs(l) && o[l] == null && delete r[l]
    },
    Oe = xc;

function ac(e) {
    return uc(e)
}

function uc(e, t) {
    const n = Zn();
    n.__VUE__ = !0;
    const {
        insert: s,
        remove: r,
        patchProp: i,
        createElement: o,
        createText: l,
        createComment: c,
        setText: f,
        setElementText: a,
        parentNode: d,
        nextSibling: h,
        setScopeId: m = Ye,
        insertStaticContent: E
    } = e, A = (u, p, g, v = null, b = null, y = null, R = void 0, C = null, x = !!p.dynamicChildren) => {
        if (u === p) return;
        u && !Rt(u, p) && (v = _(u), Ee(u, b, y, !0), u = null), p.patchFlag === -2 && (x = !1, p.dynamicChildren = null);
        const {
            type: S,
            ref: k,
            shapeFlag: T
        } = p;
        switch (S) {
            case ls:
                B(u, p, g, v);
                break;
            case Ce:
                N(u, p, g, v);
                break;
            case Mn:
                u == null && M(p, g, v, R);
                break;
            case ye:
                O(u, p, g, v, b, y, R, C, x);
                break;
            default:
                T & 1 ? K(u, p, g, v, b, y, R, C, x) : T & 6 ? z(u, p, g, v, b, y, R, C, x) : (T & 64 || T & 128) && S.process(u, p, g, v, b, y, R, C, x, $)
        }
        k != null && b ? nn(k, u && u.ref, y, p || u, !p) : k == null && u && u.ref != null && nn(u.ref, null, y, u, !0)
    }, B = (u, p, g, v) => {
        if (u == null) s(p.el = l(p.children), g, v);
        else {
            const b = p.el = u.el;
            p.children !== u.children && f(b, p.children)
        }
    }, N = (u, p, g, v) => {
        u == null ? s(p.el = c(p.children || ""), g, v) : p.el = u.el
    }, M = (u, p, g, v) => {
        [u.el, u.anchor] = E(u.children, p, g, v, u.el, u.anchor)
    }, D = ({
        el: u,
        anchor: p
    }, g, v) => {
        let b;
        for (; u && u !== p;) b = h(u), s(u, g, v), u = b;
        s(p, g, v)
    }, L = ({
        el: u,
        anchor: p
    }) => {
        let g;
        for (; u && u !== p;) g = h(u), r(u), u = g;
        r(p)
    }, K = (u, p, g, v, b, y, R, C, x) => {
        p.type === "svg" ? R = "svg" : p.type === "math" && (R = "mathml"), u == null ? ne(p, g, v, b, y, R, C, x) : U(u, p, b, y, R, C, x)
    }, ne = (u, p, g, v, b, y, R, C) => {
        let x, S;
        const {
            props: k,
            shapeFlag: T,
            transition: F,
            dirs: H
        } = u;
        if (x = u.el = o(u.type, y, k && k.is, k), T & 8 ? a(x, u.children) : T & 16 && ve(u.children, x, null, v, b, ys(u, y), R, C), H && St(u, null, v, "created"), Z(x, u, u.scopeId, R, v), k) {
            for (const oe in k) oe !== "value" && !Zt(oe) && i(x, oe, null, k[oe], y, v);
            "value" in k && i(x, "value", null, k.value, y), (S = k.onVnodeBeforeMount) && Ge(S, v, u)
        }
        H && St(u, null, v, "beforeMount");
        const W = fc(b, F);
        W && F.beforeEnter(x), s(x, p, g), ((S = k && k.onVnodeMounted) || W || H) && Oe(() => {
            S && Ge(S, v, u), W && F.enter(x), H && St(u, null, v, "mounted")
        }, b)
    }, Z = (u, p, g, v, b) => {
        if (g && m(u, g), v)
            for (let y = 0; y < v.length; y++) m(u, v[y]);
        if (b) {
            let y = b.subTree;
            if (p === y || yo(y.type) && (y.ssContent === p || y.ssFallback === p)) {
                const R = b.vnode;
                Z(u, R, R.scopeId, R.slotScopeIds, b.parent)
            }
        }
    }, ve = (u, p, g, v, b, y, R, C, x = 0) => {
        for (let S = x; S < u.length; S++) {
            const k = u[S] = C ? mt(u[S]) : Qe(u[S]);
            A(null, k, p, g, v, b, y, R, C)
        }
    }, U = (u, p, g, v, b, y, R) => {
        const C = p.el = u.el;
        let {
            patchFlag: x,
            dynamicChildren: S,
            dirs: k
        } = p;
        x |= u.patchFlag & 16;
        const T = u.props || re,
            F = p.props || re;
        let H;
        if (g && xt(g, !1), (H = F.onVnodeBeforeUpdate) && Ge(H, g, p, u), k && St(p, u, g, "beforeUpdate"), g && xt(g, !0), (T.innerHTML && F.innerHTML == null || T.textContent && F.textContent == null) && a(C, ""), S ? G(u.dynamicChildren, S, C, g, v, ys(p, b), y) : R || J(u, p, C, null, g, v, ys(p, b), y, !1), x > 0) {
            if (x & 16) ie(C, T, F, g, b);
            else if (x & 2 && T.class !== F.class && i(C, "class", null, F.class, b), x & 4 && i(C, "style", T.style, F.style, b), x & 8) {
                const W = p.dynamicProps;
                for (let oe = 0; oe < W.length; oe++) {
                    const X = W[oe],
                        Re = T[X],
                        Pe = F[X];
                    (Pe !== Re || X === "value") && i(C, X, Re, Pe, b, g)
                }
            }
            x & 1 && u.children !== p.children && a(C, p.children)
        } else !R && S == null && ie(C, T, F, g, b);
        ((H = F.onVnodeUpdated) || k) && Oe(() => {
            H && Ge(H, g, p, u), k && St(p, u, g, "updated")
        }, v)
    }, G = (u, p, g, v, b, y, R) => {
        for (let C = 0; C < p.length; C++) {
            const x = u[C],
                S = p[C],
                k = x.el && (x.type === ye || !Rt(x, S) || x.shapeFlag & 198) ? d(x.el) : g;
            A(x, S, k, null, v, b, y, R, !0)
        }
    }, ie = (u, p, g, v, b) => {
        if (p !== g) {
            if (p !== re)
                for (const y in p) !Zt(y) && !(y in g) && i(u, y, p[y], null, b, v);
            for (const y in g) {
                if (Zt(y)) continue;
                const R = g[y],
                    C = p[y];
                R !== C && y !== "value" && i(u, y, C, R, b, v)
            }
            "value" in g && i(u, "value", p.value, g.value, b)
        }
    }, O = (u, p, g, v, b, y, R, C, x) => {
        const S = p.el = u ? u.el : l(""),
            k = p.anchor = u ? u.anchor : l("");
        let {
            patchFlag: T,
            dynamicChildren: F,
            slotScopeIds: H
        } = p;
        H && (C = C ? C.concat(H) : H), u == null ? (s(S, g, v), s(k, g, v), ve(p.children || [], g, k, b, y, R, C, x)) : T > 0 && T & 64 && F && u.dynamicChildren ? (G(u.dynamicChildren, F, g, b, y, R, C), (p.key != null || b && p === b.subTree) && fo(u, p, !0)) : J(u, p, g, k, b, y, R, C, x)
    }, z = (u, p, g, v, b, y, R, C, x) => {
        p.slotScopeIds = C, u == null ? p.shapeFlag & 512 ? b.ctx.activate(p, g, v, R, x) : ge(p, g, v, b, y, R, x) : Ae(u, p, x)
    }, ge = (u, p, g, v, b, y, R) => {
        const C = u.component = Mc(u, v, b);
        if (rs(u) && (C.ctx.renderer = $), Lc(C, !1, R), C.asyncDep) {
            if (b && b.registerDep(C, de, R), !u.el) {
                const x = C.subTree = ue(Ce);
                N(null, x, p, g), u.placeholder = x.el
            }
        } else de(C, u, p, g, b, y, R)
    }, Ae = (u, p, g) => {
        const v = p.component = u.component;
        if (wc(u, p, g))
            if (v.asyncDep && !v.asyncResolved) {
                ee(v, p, g);
                return
            } else v.next = p, v.update();
        else p.el = u.el, v.vnode = p
    }, de = (u, p, g, v, b, y, R) => {
        const C = () => {
            if (u.isMounted) {
                let {
                    next: T,
                    bu: F,
                    u: H,
                    parent: W,
                    vnode: oe
                } = u;
                {
                    const We = po(u);
                    if (We) {
                        T && (T.el = oe.el, ee(u, T, R)), We.asyncDep.then(() => {
                            u.isUnmounted || C()
                        });
                        return
                    }
                }
                let X = T,
                    Re;
                xt(u, !1), T ? (T.el = oe.el, ee(u, T, R)) : T = oe, F && An(F), (Re = T.props && T.props.onVnodeBeforeUpdate) && Ge(Re, W, T, oe), xt(u, !0);
                const Pe = xr(u),
                    Ke = u.subTree;
                u.subTree = Pe, A(Ke, Pe, d(Ke.el), _(Ke), u, b, y), T.el = Pe.el, X === null && Sc(u, Pe.el), H && Oe(H, b), (Re = T.props && T.props.onVnodeUpdated) && Oe(() => Ge(Re, W, T, oe), b)
            } else {
                let T;
                const {
                    el: F,
                    props: H
                } = p, {
                    bm: W,
                    m: oe,
                    parent: X,
                    root: Re,
                    type: Pe
                } = u, Ke = sn(p);
                xt(u, !1), W && An(W), !Ke && (T = H && H.onVnodeBeforeMount) && Ge(T, X, p), xt(u, !0);
                {
                    Re.ce && Re.ce._def.shadowRoot !== !1 && Re.ce._injectChildStyle(Pe);
                    const We = u.subTree = xr(u);
                    A(null, We, g, v, u, b, y), p.el = We.el
                }
                if (oe && Oe(oe, b), !Ke && (T = H && H.onVnodeMounted)) {
                    const We = p;
                    Oe(() => Ge(T, X, We), b)
                }(p.shapeFlag & 256 || X && sn(X.vnode) && X.vnode.shapeFlag & 256) && u.a && Oe(u.a, b), u.isMounted = !0, p = g = v = null
            }
        };
        u.scope.on();
        const x = u.effect = new _i(C);
        u.scope.off();
        const S = u.update = x.run.bind(x),
            k = u.job = x.runIfDirty.bind(x);
        k.i = u, k.id = u.uid, x.scheduler = () => Ys(k), xt(u, !0), S()
    }, ee = (u, p, g) => {
        p.component = u;
        const v = u.vnode.props;
        u.vnode = p, u.next = null, rc(u, p.props, v, g), cc(u, p.children, g), ct(), pr(u), at()
    }, J = (u, p, g, v, b, y, R, C, x = !1) => {
        const S = u && u.children,
            k = u ? u.shapeFlag : 0,
            T = p.children,
            {
                patchFlag: F,
                shapeFlag: H
            } = p;
        if (F > 0) {
            if (F & 128) {
                ft(S, T, g, v, b, y, R, C, x);
                return
            } else if (F & 256) {
                et(S, T, g, v, b, y, R, C, x);
                return
            }
        }
        H & 8 ? (k & 16 && Ne(S, b, y), T !== S && a(g, T)) : k & 16 ? H & 16 ? ft(S, T, g, v, b, y, R, C, x) : Ne(S, b, y, !0) : (k & 8 && a(g, ""), H & 16 && ve(T, g, v, b, y, R, C, x))
    }, et = (u, p, g, v, b, y, R, C, x) => {
        u = u || Ft, p = p || Ft;
        const S = u.length,
            k = p.length,
            T = Math.min(S, k);
        let F;
        for (F = 0; F < T; F++) {
            const H = p[F] = x ? mt(p[F]) : Qe(p[F]);
            A(u[F], H, g, null, b, y, R, C, x)
        }
        S > k ? Ne(u, b, y, !0, !1, T) : ve(p, g, v, b, y, R, C, x, T)
    }, ft = (u, p, g, v, b, y, R, C, x) => {
        let S = 0;
        const k = p.length;
        let T = u.length - 1,
            F = k - 1;
        for (; S <= T && S <= F;) {
            const H = u[S],
                W = p[S] = x ? mt(p[S]) : Qe(p[S]);
            if (Rt(H, W)) A(H, W, g, null, b, y, R, C, x);
            else break;
            S++
        }
        for (; S <= T && S <= F;) {
            const H = u[T],
                W = p[F] = x ? mt(p[F]) : Qe(p[F]);
            if (Rt(H, W)) A(H, W, g, null, b, y, R, C, x);
            else break;
            T--, F--
        }
        if (S > T) {
            if (S <= F) {
                const H = F + 1,
                    W = H < k ? p[H].el : v;
                for (; S <= F;) A(null, p[S] = x ? mt(p[S]) : Qe(p[S]), g, W, b, y, R, C, x), S++
            }
        } else if (S > F)
            for (; S <= T;) Ee(u[S], b, y, !0), S++;
        else {
            const H = S,
                W = S,
                oe = new Map;
            for (S = W; S <= F; S++) {
                const Ie = p[S] = x ? mt(p[S]) : Qe(p[S]);
                Ie.key != null && oe.set(Ie.key, S)
            }
            let X, Re = 0;
            const Pe = F - W + 1;
            let Ke = !1,
                We = 0;
            const zt = new Array(Pe);
            for (S = 0; S < Pe; S++) zt[S] = 0;
            for (S = H; S <= T; S++) {
                const Ie = u[S];
                if (Re >= Pe) {
                    Ee(Ie, b, y, !0);
                    continue
                }
                let qe;
                if (Ie.key != null) qe = oe.get(Ie.key);
                else
                    for (X = W; X <= F; X++)
                        if (zt[X - W] === 0 && Rt(Ie, p[X])) {
                            qe = X;
                            break
                        } qe === void 0 ? Ee(Ie, b, y, !0) : (zt[qe - W] = S + 1, qe >= We ? We = qe : Ke = !0, A(Ie, p[qe], g, null, b, y, R, C, x), Re++)
            }
            const or = Ke ? dc(zt) : Ft;
            for (X = or.length - 1, S = Pe - 1; S >= 0; S--) {
                const Ie = W + S,
                    qe = p[Ie],
                    lr = p[Ie + 1],
                    cr = Ie + 1 < k ? lr.el || lr.placeholder : v;
                zt[S] === 0 ? A(null, qe, g, cr, b, y, R, C, x) : Ke && (X < 0 || S !== or[X] ? Ue(qe, g, cr, 2) : X--)
            }
        }
    }, Ue = (u, p, g, v, b = null) => {
        const {
            el: y,
            type: R,
            transition: C,
            children: x,
            shapeFlag: S
        } = u;
        if (S & 6) {
            Ue(u.component.subTree, p, g, v);
            return
        }
        if (S & 128) {
            u.suspense.move(p, g, v);
            return
        }
        if (S & 64) {
            R.move(u, p, g, $);
            return
        }
        if (R === ye) {
            s(y, p, g);
            for (let T = 0; T < x.length; T++) Ue(x[T], p, g, v);
            s(u.anchor, p, g);
            return
        }
        if (R === Mn) {
            D(u, p, g);
            return
        }
        if (v !== 2 && S & 1 && C)
            if (v === 0) C.beforeEnter(y), s(y, p, g), Oe(() => C.enter(y), b);
            else {
                const {
                    leave: T,
                    delayLeave: F,
                    afterLeave: H
                } = C, W = () => {
                    u.ctx.isUnmounted ? r(y) : s(y, p, g)
                }, oe = () => {
                    y._isLeaving && y[rt](!0), T(y, () => {
                        W(), H && H()
                    })
                };
                F ? F(y, W, oe) : oe()
            }
        else s(y, p, g)
    }, Ee = (u, p, g, v = !1, b = !1) => {
        const {
            type: y,
            props: R,
            ref: C,
            children: x,
            dynamicChildren: S,
            shapeFlag: k,
            patchFlag: T,
            dirs: F,
            cacheIndex: H
        } = u;
        if (T === -2 && (b = !1), C != null && (ct(), nn(C, null, g, u, !0), at()), H != null && (p.renderCache[H] = void 0), k & 256) {
            p.ctx.deactivate(u);
            return
        }
        const W = k & 1 && F,
            oe = !sn(u);
        let X;
        if (oe && (X = R && R.onVnodeBeforeUnmount) && Ge(X, p, u), k & 6) Cn(u.component, g, v);
        else {
            if (k & 128) {
                u.suspense.unmount(g, v);
                return
            }
            W && St(u, null, p, "beforeUnmount"), k & 64 ? u.type.remove(u, p, g, $, v) : S && !S.hasOnce && (y !== ye || T > 0 && T & 64) ? Ne(S, p, g, !1, !0) : (y === ye && T & 384 || !b && k & 16) && Ne(x, p, g), v && Mt(u)
        }(oe && (X = R && R.onVnodeUnmounted) || W) && Oe(() => {
            X && Ge(X, p, u), W && St(u, null, p, "unmounted")
        }, g)
    }, Mt = u => {
        const {
            type: p,
            el: g,
            anchor: v,
            transition: b
        } = u;
        if (p === ye) {
            Lt(g, v);
            return
        }
        if (p === Mn) {
            L(u);
            return
        }
        const y = () => {
            r(g), b && !b.persisted && b.afterLeave && b.afterLeave()
        };
        if (u.shapeFlag & 1 && b && !b.persisted) {
            const {
                leave: R,
                delayLeave: C
            } = b, x = () => R(g, y);
            C ? C(u.el, y, x) : x()
        } else y()
    }, Lt = (u, p) => {
        let g;
        for (; u !== p;) g = h(u), r(u), u = g;
        r(p)
    }, Cn = (u, p, g) => {
        const {
            bum: v,
            scope: b,
            job: y,
            subTree: R,
            um: C,
            m: x,
            a: S
        } = u;
        Sr(x), Sr(S), v && An(v), b.stop(), y && (y.flags |= 8, Ee(R, u, p, g)), C && Oe(C, p), Oe(() => {
            u.isUnmounted = !0
        }, p)
    }, Ne = (u, p, g, v = !1, b = !1, y = 0) => {
        for (let R = y; R < u.length; R++) Ee(u[R], p, g, v, b)
    }, _ = u => {
        if (u.shapeFlag & 6) return _(u.component.subTree);
        if (u.shapeFlag & 128) return u.suspense.next();
        const p = h(u.anchor || u.el),
            g = p && p[Nl];
        return g ? h(g) : p
    };
    let I = !1;
    const P = (u, p, g) => {
            u == null ? p._vnode && Ee(p._vnode, null, null, !0) : A(p._vnode || null, u, p, null, null, null, g), p._vnode = u, I || (I = !0, pr(), ji(), I = !1)
        },
        $ = {
            p: A,
            um: Ee,
            m: Ue,
            r: Mt,
            mt: ge,
            mc: ve,
            pc: J,
            pbc: G,
            n: _,
            o: e
        };
    return {
        render: P,
        hydrate: void 0,
        createApp: nc(P)
    }
}

function ys({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function xt({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function fc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function fo(e, t, n = !1) {
    const s = e.children,
        r = t.children;
    if (j(s) && j(r))
        for (let i = 0; i < s.length; i++) {
            const o = s[i];
            let l = r[i];
            l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = mt(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && fo(o, l)), l.type === ls && l.patchFlag !== -1 && (l.el = o.el), l.type === Ce && !l.el && (l.el = o.el)
        }
}

function dc(e) {
    const t = e.slice(),
        n = [0];
    let s, r, i, o, l;
    const c = e.length;
    for (s = 0; s < c; s++) {
        const f = e[s];
        if (f !== 0) {
            if (r = n[n.length - 1], e[r] < f) {
                t[s] = r, n.push(s);
                continue
            }
            for (i = 0, o = n.length - 1; i < o;) l = i + o >> 1, e[n[l]] < f ? i = l + 1 : o = l;
            f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s)
        }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0;) n[i] = o, o = t[o];
    return n
}

function po(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : po(t)
}

function Sr(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const pc = Symbol.for("v-scx"),
    hc = () => Xe(pc);

function On(e, t, n) {
    return ho(e, t, n)
}

function ho(e, t, n = re) {
    const {
        immediate: s,
        deep: r,
        flush: i,
        once: o
    } = n, l = he({}, n), c = t && s || !t && i !== "post";
    let f;
    if (vn) {
        if (i === "sync") {
            const m = hc();
            f = m.__watcherHandles || (m.__watcherHandles = [])
        } else if (!c) {
            const m = () => {};
            return m.stop = Ye, m.resume = Ye, m.pause = Ye, m
        }
    }
    const a = be;
    l.call = (m, E, A) => Ve(m, a, E, A);
    let d = !1;
    i === "post" ? l.scheduler = m => {
        Oe(m, a && a.suspense)
    } : i !== "sync" && (d = !0, l.scheduler = (m, E) => {
        E ? m() : Ys(m)
    }), l.augmentJob = m => {
        t && (m.flags |= 4), d && (m.flags |= 2, a && (m.id = a.uid, m.i = a))
    };
    const h = Il(e, t, l);
    return vn && (f ? f.push(h) : c && h()), h
}

function gc(e, t, n) {
    const s = this.proxy,
        r = pe(e) ? e.includes(".") ? go(s, e) : () => s[e] : e.bind(s, s);
    let i;
    V(t) ? i = t : (i = t.handler, n = t);
    const o = xn(this),
        l = ho(r, i.bind(s), n);
    return o(), l
}

function go(e, t) {
    const n = t.split(".");
    return () => {
        let s = e;
        for (let r = 0; r < n.length && s; r++) s = s[n[r]];
        return s
    }
}
const mc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Fe(t)}Modifiers`] || e[`${It(t)}Modifiers`];

function yc(e, t, ...n) {
    if (e.isUnmounted) return;
    const s = e.vnode.props || re;
    let r = n;
    const i = t.startsWith("update:"),
        o = i && mc(s, t.slice(7));
    o && (o.trim && (r = n.map(a => pe(a) ? a.trim() : a)), o.number && (r = n.map(Dn)));
    let l, c = s[l = us(t)] || s[l = us(Fe(t))];
    !c && i && (c = s[l = us(It(t))]), c && Ve(c, e, 6, r);
    const f = s[l + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        e.emitted[l] = !0, Ve(f, e, 6, r)
    }
}
const vc = new WeakMap;

function mo(e, t, n = !1) {
    const s = n ? vc : t.emitsCache,
        r = s.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        l = !1;
    if (!V(e)) {
        const c = f => {
            const a = mo(f, t, !0);
            a && (l = !0, he(o, a))
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    return !i && !l ? (te(e) && s.set(e, null), null) : (j(i) ? i.forEach(c => o[c] = null) : he(o, i), te(e) && s.set(e, o), o)
}

function os(e, t) {
    return !e || !Jn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, It(t)) || Y(e, t))
}

function xr(e) {
    const {
        type: t,
        vnode: n,
        proxy: s,
        withProxy: r,
        propsOptions: [i],
        slots: o,
        attrs: l,
        emit: c,
        render: f,
        renderCache: a,
        props: d,
        data: h,
        setupState: m,
        ctx: E,
        inheritAttrs: A
    } = e, B = Hn(e);
    let N, M;
    try {
        if (n.shapeFlag & 4) {
            const L = r || s,
                K = L;
            N = Qe(f.call(K, L, a, d, m, h, E)), M = l
        } else {
            const L = t;
            N = Qe(L.length > 1 ? L(d, {
                attrs: l,
                slots: o,
                emit: c
            }) : L(d, null)), M = t.props ? l : _c(l)
        }
    } catch (L) {
        ln.length = 0, ss(L, e, 1), N = ue(Ce)
    }
    let D = N;
    if (M && A !== !1) {
        const L = Object.keys(M),
            {
                shapeFlag: K
            } = D;
        L.length && K & 7 && (i && L.some(Hs) && (M = bc(M, i)), D = wt(D, M, !1, !0))
    }
    return n.dirs && (D = wt(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && At(D, n.transition), N = D, Hn(B), N
}
const _c = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || Jn(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    bc = (e, t) => {
        const n = {};
        for (const s in e)(!Hs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
        return n
    };

function wc(e, t, n) {
    const {
        props: s,
        children: r,
        component: i
    } = e, {
        props: o,
        children: l,
        patchFlag: c
    } = t, f = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return s ? Cr(s, o, f) : !!o;
        if (c & 8) {
            const a = t.dynamicProps;
            for (let d = 0; d < a.length; d++) {
                const h = a[d];
                if (o[h] !== s[h] && !os(f, h)) return !0
            }
        }
    } else return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Cr(s, o, f) : !0 : !!o;
    return !1
}

function Cr(e, t, n) {
    const s = Object.keys(t);
    if (s.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < s.length; r++) {
        const i = s[r];
        if (t[i] !== e[i] && !os(n, i)) return !0
    }
    return !1
}

function Sc({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const s = t.subTree;
        if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const yo = e => e.__isSuspense;

function xc(e, t) {
    t && t.pendingBranch ? j(e) ? t.effects.push(...e) : t.effects.push(e) : Ll(e)
}
const ye = Symbol.for("v-fgt"),
    ls = Symbol.for("v-txt"),
    Ce = Symbol.for("v-cmt"),
    Mn = Symbol.for("v-stc"),
    ln = [];
let Le = null;

function ce(e = !1) {
    ln.push(Le = e ? null : [])
}

function Cc() {
    ln.pop(), Le = ln[ln.length - 1] || null
}
let yn = 1;

function Un(e, t = !1) {
    yn += e, e < 0 && Le && t && (Le.hasOnce = !0)
}

function vo(e) {
    return e.dynamicChildren = yn > 0 ? Le || Ft : null, Cc(), yn > 0 && Le && Le.push(e), e
}

function ae(e, t, n, s, r, i) {
    return vo(w(e, t, n, s, r, i, !0))
}

function Ec(e, t, n, s, r) {
    return vo(ue(e, t, n, s, r, !0))
}

function Kn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function Rt(e, t) {
    return e.type === t.type && e.key === t.key
}
const _o = ({
        key: e
    }) => e ?? null,
    Ln = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? pe(e) || we(e) || V(e) ? {
        i: Me,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function w(e, t = null, n = null, s = 0, r = null, i = e === ye ? 0 : 1, o = !1, l = !1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && _o(t),
        ref: t && Ln(t),
        scopeId: Hi,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: s,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: Me
    };
    return l ? (tr(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= pe(n) ? 8 : 16), yn > 0 && !o && Le && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && Le.push(c), c
}
const ue = Rc;

function Rc(e, t = null, n = null, s = 0, r = null, i = !1) {
    if ((!e || e === Gl) && (e = Ce), Kn(e)) {
        const l = wt(e, t, !0);
        return n && tr(l, n), yn > 0 && !i && Le && (l.shapeFlag & 6 ? Le[Le.indexOf(e)] = l : Le.push(l)), l.patchFlag = -2, l
    }
    if (jc(e) && (e = e.__vccOpts), t) {
        t = Pc(t);
        let {
            class: l,
            style: c
        } = t;
        l && !pe(l) && (t.class = dn(l)), te(c) && (Js(c) && !j(c) && (c = he({}, c)), t.style = fn(c))
    }
    const o = pe(e) ? 1 : yo(e) ? 128 : Vi(e) ? 64 : te(e) ? 4 : V(e) ? 2 : 0;
    return w(e, t, n, s, r, o, i, !0)
}

function Pc(e) {
    return e ? Js(e) || io(e) ? he({}, e) : e : null
}

function wt(e, t, n = !1, s = !1) {
    const {
        props: r,
        ref: i,
        patchFlag: o,
        children: l,
        transition: c
    } = e, f = t ? Ac(r || {}, t) : r, a = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && _o(f),
        ref: t && t.ref ? n && i ? j(i) ? i.concat(Ln(t)) : [i, Ln(t)] : Ln(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: l,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== ye ? o === -1 ? 16 : o | 16 : o,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && wt(e.ssContent),
        ssFallback: e.ssFallback && wt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && s && At(a, c.clone(a)), a
}

function cn(e = " ", t = 0) {
    return ue(ls, null, e, t)
}

function Tc(e, t) {
    const n = ue(Mn, null, e);
    return n.staticCount = t, n
}

function Nn(e = "", t = !1) {
    return t ? (ce(), Ec(Ce, null, e)) : ue(Ce, null, e)
}

function Qe(e) {
    return e == null || typeof e == "boolean" ? ue(Ce) : j(e) ? ue(ye, null, e.slice()) : Kn(e) ? mt(e) : ue(ls, null, String(e))
}

function mt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : wt(e)
}

function tr(e, t) {
    let n = 0;
    const {
        shapeFlag: s
    } = e;
    if (t == null) t = null;
    else if (j(t)) n = 16;
    else if (typeof t == "object")
        if (s & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), tr(e, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !io(t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else V(t) ? (t = {
        default: t,
        _ctx: Me
    }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [cn(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Ac(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const s = e[n];
        for (const r in s)
            if (r === "class") t.class !== s.class && (t.class = dn([t.class, s.class]));
            else if (r === "style") t.style = fn([t.style, s.style]);
        else if (Jn(r)) {
            const i = t[r],
                o = s[r];
            o && i !== o && !(j(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o)
        } else r !== "" && (t[r] = s[r])
    }
    return t
}

function Ge(e, t, n, s = null) {
    Ve(e, t, 7, [n, s])
}
const Ic = no();
let Oc = 0;

function Mc(e, t, n) {
    const s = e.type,
        r = (t ? t.appContext : e.appContext) || Ic,
        i = {
            uid: Oc++,
            vnode: e,
            type: s,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new nl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: lo(s, r),
            emitsOptions: mo(s, r),
            emit: null,
            emitted: null,
            propsDefaults: re,
            inheritAttrs: s.inheritAttrs,
            ctx: re,
            data: re,
            props: re,
            attrs: re,
            slots: re,
            refs: re,
            setupState: re,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = yc.bind(null, i), e.ce && e.ce(i), i
}
let be = null;
const nr = () => be || Me;
let Wn, Ls;
{
    const e = Zn(),
        t = (n, s) => {
            let r;
            return (r = e[n]) || (r = e[n] = []), r.push(s), i => {
                r.length > 1 ? r.forEach(o => o(i)) : r[0](i)
            }
        };
    Wn = t("__VUE_INSTANCE_SETTERS__", n => be = n), Ls = t("__VUE_SSR_SETTERS__", n => vn = n)
}
const xn = e => {
        const t = be;
        return Wn(e), e.scope.on(), () => {
            e.scope.off(), Wn(t)
        }
    },
    Er = () => {
        be && be.scope.off(), Wn(null)
    };

function bo(e) {
    return e.vnode.shapeFlag & 4
}
let vn = !1;

function Lc(e, t = !1, n = !1) {
    t && Ls(t);
    const {
        props: s,
        children: r
    } = e.vnode, i = bo(e);
    sc(e, s, i, t), lc(e, r, n || t);
    const o = i ? Nc(e, t) : void 0;
    return t && Ls(!1), o
}

function Nc(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, Jl);
    const {
        setup: s
    } = n;
    if (s) {
        ct();
        const r = e.setupContext = s.length > 1 ? Dc(e) : null,
            i = xn(e),
            o = Sn(s, e, 0, [e.props, r]),
            l = di(o);
        if (at(), i(), (l || e.sp) && !sn(e) && zi(e), l) {
            if (o.then(Er, Er), t) return o.then(c => {
                Rr(e, c)
            }).catch(c => {
                ss(c, e, 0)
            });
            e.asyncDep = o
        } else Rr(e, o)
    } else wo(e)
}

function Rr(e, t, n) {
    V(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : te(t) && (e.setupState = $i(t)), wo(e)
}

function wo(e, t, n) {
    const s = e.type;
    e.render || (e.render = s.render || Ye);
    {
        const r = xn(e);
        ct();
        try {
            Ql(e)
        } finally {
            at(), r()
        }
    }
}
const $c = {
    get(e, t) {
        return _e(e, "get", ""), e[t]
    }
};

function Dc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, $c),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function cs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($i(Sl(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in on) return on[n](e)
        },
        has(t, n) {
            return n in t || n in on
        }
    })) : e.proxy
}

function Fc(e, t = !0) {
    return V(e) ? e.displayName || e.name : e.name || t && e.__name
}

function jc(e) {
    return V(e) && "__vccOpts" in e
}
const ke = (e, t) => Tl(e, t, vn);

function sr(e, t, n) {
    try {
        Un(-1);
        const s = arguments.length;
        return s === 2 ? te(t) && !j(t) ? Kn(t) ? ue(e, null, [t]) : ue(e, t) : ue(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Kn(n) && (n = [n]), ue(e, t, n))
    } finally {
        Un(1)
    }
}
const kc = "3.5.22";
/**
 * @vue/runtime-dom v3.5.22
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Ns;
const Pr = typeof window < "u" && window.trustedTypes;
if (Pr) try {
    Ns = Pr.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const So = Ns ? e => Ns.createHTML(e) : e => e,
    Hc = "http://www.w3.org/2000/svg",
    Vc = "http://www.w3.org/1998/Math/MathML",
    st = typeof document < "u" ? document : null,
    Tr = st && st.createElement("template"),
    Bc = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, s) => {
            const r = t === "svg" ? st.createElementNS(Hc, e) : t === "mathml" ? st.createElementNS(Vc, e) : n ? st.createElement(e, {
                is: n
            }) : st.createElement(e);
            return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r
        },
        createText: e => st.createTextNode(e),
        createComment: e => st.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => st.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, s, r, i) {
            const o = n ? n.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)););
            else {
                Tr.innerHTML = So(s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e);
                const l = Tr.content;
                if (s === "svg" || s === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild;) l.appendChild(c.firstChild);
                    l.removeChild(c)
                }
                t.insertBefore(l, n)
            }
            return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    dt = "transition",
    Qt = "animation",
    Wt = Symbol("_vtc"),
    xo = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    Co = he({}, Ui, xo),
    Uc = e => (e.displayName = "Transition", e.props = Co, e),
    Kc = Uc((e, {
        slots: t
    }) => sr(Dl, Eo(e), t)),
    Ct = (e, t = []) => {
        j(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Ar = e => e ? j(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Eo(e) {
    const t = {};
    for (const O in e) O in xo || (t[O] = e[O]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: s,
        duration: r,
        enterFromClass: i = `${n}-enter-from`,
        enterActiveClass: o = `${n}-enter-active`,
        enterToClass: l = `${n}-enter-to`,
        appearFromClass: c = i,
        appearActiveClass: f = o,
        appearToClass: a = l,
        leaveFromClass: d = `${n}-leave-from`,
        leaveActiveClass: h = `${n}-leave-active`,
        leaveToClass: m = `${n}-leave-to`
    } = e, E = Wc(r), A = E && E[0], B = E && E[1], {
        onBeforeEnter: N,
        onEnter: M,
        onEnterCancelled: D,
        onLeave: L,
        onLeaveCancelled: K,
        onBeforeAppear: ne = N,
        onAppear: Z = M,
        onAppearCancelled: ve = D
    } = t, U = (O, z, ge, Ae) => {
        O._enterCancelled = Ae, ht(O, z ? a : l), ht(O, z ? f : o), ge && ge()
    }, G = (O, z) => {
        O._isLeaving = !1, ht(O, d), ht(O, m), ht(O, h), z && z()
    }, ie = O => (z, ge) => {
        const Ae = O ? Z : M,
            de = () => U(z, O, ge);
        Ct(Ae, [z, de]), Ir(() => {
            ht(z, O ? c : i), ze(z, O ? a : l), Ar(Ae) || Or(z, s, A, de)
        })
    };
    return he(t, {
        onBeforeEnter(O) {
            Ct(N, [O]), ze(O, i), ze(O, o)
        },
        onBeforeAppear(O) {
            Ct(ne, [O]), ze(O, c), ze(O, f)
        },
        onEnter: ie(!1),
        onAppear: ie(!0),
        onLeave(O, z) {
            O._isLeaving = !0;
            const ge = () => G(O, z);
            ze(O, d), O._enterCancelled ? (ze(O, h), $s(O)) : ($s(O), ze(O, h)), Ir(() => {
                O._isLeaving && (ht(O, d), ze(O, m), Ar(L) || Or(O, s, B, ge))
            }), Ct(L, [O, ge])
        },
        onEnterCancelled(O) {
            U(O, !1, void 0, !0), Ct(D, [O])
        },
        onAppearCancelled(O) {
            U(O, !0, void 0, !0), Ct(ve, [O])
        },
        onLeaveCancelled(O) {
            G(O), Ct(K, [O])
        }
    })
}

function Wc(e) {
    if (e == null) return null;
    if (te(e)) return [vs(e.enter), vs(e.leave)];
    {
        const t = vs(e);
        return [t, t]
    }
}

function vs(e) {
    return Go(e)
}

function ze(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Wt] || (e[Wt] = new Set)).add(t)
}

function ht(e, t) {
    t.split(/\s+/).forEach(s => s && e.classList.remove(s));
    const n = e[Wt];
    n && (n.delete(t), n.size || (e[Wt] = void 0))
}

function Ir(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let qc = 0;

function Or(e, t, n, s) {
    const r = e._endId = ++qc,
        i = () => {
            r === e._endId && s()
        };
    if (n != null) return setTimeout(i, n);
    const {
        type: o,
        timeout: l,
        propCount: c
    } = Ro(e, t);
    if (!o) return s();
    const f = o + "end";
    let a = 0;
    const d = () => {
            e.removeEventListener(f, h), i()
        },
        h = m => {
            m.target === e && ++a >= c && d()
        };
    setTimeout(() => {
        a < c && d()
    }, l + 1), e.addEventListener(f, h)
}

function Ro(e, t) {
    const n = window.getComputedStyle(e),
        s = E => (n[E] || "").split(", "),
        r = s(`${dt}Delay`),
        i = s(`${dt}Duration`),
        o = Mr(r, i),
        l = s(`${Qt}Delay`),
        c = s(`${Qt}Duration`),
        f = Mr(l, c);
    let a = null,
        d = 0,
        h = 0;
    t === dt ? o > 0 && (a = dt, d = o, h = i.length) : t === Qt ? f > 0 && (a = Qt, d = f, h = c.length) : (d = Math.max(o, f), a = d > 0 ? o > f ? dt : Qt : null, h = a ? a === dt ? i.length : c.length : 0);
    const m = a === dt && /\b(?:transform|all)(?:,|$)/.test(s(`${dt}Property`).toString());
    return {
        type: a,
        timeout: d,
        propCount: h,
        hasTransform: m
    }
}

function Mr(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, s) => Lr(n) + Lr(e[s])))
}

function Lr(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function $s(e) {
    return (e ? e.ownerDocument : document).body.offsetHeight
}

function Gc(e, t, n) {
    const s = e[Wt];
    s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Nr = Symbol("_vod"),
    zc = Symbol("_vsh"),
    Jc = Symbol(""),
    Qc = /(?:^|;)\s*display\s*:/;

function Yc(e, t, n) {
    const s = e.style,
        r = pe(n);
    let i = !1;
    if (n && !r) {
        if (t)
            if (pe(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    n[l] == null && $n(s, l, "")
                } else
                    for (const o in t) n[o] == null && $n(s, o, "");
        for (const o in n) o === "display" && (i = !0), $n(s, o, n[o])
    } else if (r) {
        if (t !== n) {
            const o = s[Jc];
            o && (n += ";" + o), s.cssText = n, i = Qc.test(n)
        }
    } else t && e.removeAttribute("style");
    Nr in e && (e[Nr] = i ? s.display : "", e[zc] && (s.display = "none"))
}
const $r = /\s*!important$/;

function $n(e, t, n) {
    if (j(n)) n.forEach(s => $n(e, t, s));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const s = Xc(e, t);
        $r.test(n) ? e.setProperty(It(s), n.replace($r, ""), "important") : e[s] = n
    }
}
const Dr = ["Webkit", "Moz", "ms"],
    _s = {};

function Xc(e, t) {
    const n = _s[t];
    if (n) return n;
    let s = Fe(t);
    if (s !== "filter" && s in e) return _s[t] = s;
    s = Xn(s);
    for (let r = 0; r < Dr.length; r++) {
        const i = Dr[r] + s;
        if (i in e) return _s[t] = i
    }
    return t
}
const Fr = "http://www.w3.org/1999/xlink";

function jr(e, t, n, s, r, i = Zo(t)) {
    s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fr, t.slice(6, t.length)) : e.setAttributeNS(Fr, t, n) : n == null || i && !mi(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ze(n) ? String(n) : n)
}

function kr(e, t, n, s, r) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? So(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let o = !1;
    if (n === "" || n == null) {
        const l = typeof e[t];
        l === "boolean" ? n = mi(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0)
    }
    try {
        e[t] = n
    } catch {}
    o && e.removeAttribute(r || t)
}

function Pt(e, t, n, s) {
    e.addEventListener(t, n, s)
}

function Zc(e, t, n, s) {
    e.removeEventListener(t, n, s)
}
const Hr = Symbol("_vei");

function ea(e, t, n, s, r = null) {
    const i = e[Hr] || (e[Hr] = {}),
        o = i[t];
    if (s && o) o.value = s;
    else {
        const [l, c] = ta(t);
        if (s) {
            const f = i[t] = ra(s, r);
            Pt(e, l, f, c)
        } else o && (Zc(e, l, o, c), i[t] = void 0)
    }
}
const Vr = /(?:Once|Passive|Capture)$/;

function ta(e) {
    let t;
    if (Vr.test(e)) {
        t = {};
        let s;
        for (; s = e.match(Vr);) e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : It(e.slice(2)), t]
}
let bs = 0;
const na = Promise.resolve(),
    sa = () => bs || (na.then(() => bs = 0), bs = Date.now());

function ra(e, t) {
    const n = s => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        Ve(ia(s, n.value), t, 5, [s])
    };
    return n.value = e, n.attached = sa(), n
}

function ia(e, t) {
    if (j(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(s => r => !r._stopped && s && s(r))
    } else return t
}
const Br = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    oa = (e, t, n, s, r, i) => {
        const o = r === "svg";
        t === "class" ? Gc(e, s, o) : t === "style" ? Yc(e, n, s) : Jn(t) ? Hs(t) || ea(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : la(e, t, s, o)) ? (kr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && jr(e, t, s, o, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !pe(s)) ? kr(e, Fe(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), jr(e, t, s, o))
    };

function la(e, t, n, s) {
    if (s) return !!(t === "innerHTML" || t === "textContent" || t in e && Br(t) && V(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return !1
    }
    return Br(t) && pe(n) ? !1 : t in e
}
const Po = new WeakMap,
    To = new WeakMap,
    qn = Symbol("_moveCb"),
    Ur = Symbol("_enterCb"),
    ca = e => (delete e.props.mode, e),
    aa = ca({
        name: "TransitionGroup",
        props: he({}, Co, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const n = nr(),
                s = Bi();
            let r, i;
            return Yi(() => {
                if (!r.length) return;
                const o = e.moveClass || `${e.name||"v"}-move`;
                if (!ha(r[0].el, n.vnode.el, o)) {
                    r = [];
                    return
                }
                r.forEach(fa), r.forEach(da);
                const l = r.filter(pa);
                $s(n.vnode.el), l.forEach(c => {
                    const f = c.el,
                        a = f.style;
                    ze(f, o), a.transform = a.webkitTransform = a.transitionDuration = "";
                    const d = f[qn] = h => {
                        h && h.target !== f || (!h || h.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", d), f[qn] = null, ht(f, o))
                    };
                    f.addEventListener("transitionend", d)
                }), r = []
            }), () => {
                const o = q(e),
                    l = Eo(o);
                let c = o.tag || ye;
                if (r = [], i)
                    for (let f = 0; f < i.length; f++) {
                        const a = i[f];
                        a.el && a.el instanceof Element && (r.push(a), At(a, mn(a, l, s, n)), Po.set(a, a.el.getBoundingClientRect()))
                    }
                i = t.default ? Xs(t.default()) : [];
                for (let f = 0; f < i.length; f++) {
                    const a = i[f];
                    a.key != null && At(a, mn(a, l, s, n))
                }
                return ue(c, null, i)
            }
        }
    }),
    ua = aa;

function fa(e) {
    const t = e.el;
    t[qn] && t[qn](), t[Ur] && t[Ur]()
}

function da(e) {
    To.set(e, e.el.getBoundingClientRect())
}

function pa(e) {
    const t = Po.get(e),
        n = To.get(e),
        s = t.left - n.left,
        r = t.top - n.top;
    if (s || r) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${s}px,${r}px)`, i.transitionDuration = "0s", e
    }
}

function ha(e, t, n) {
    const s = e.cloneNode(),
        r = e[Wt];
    r && r.forEach(l => {
        l.split(/\s+/).forEach(c => c && s.classList.remove(c))
    }), n.split(/\s+/).forEach(l => l && s.classList.add(l)), s.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(s);
    const {
        hasTransform: o
    } = Ro(s);
    return i.removeChild(s), o
}
const Gn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return j(t) ? n => An(t, n) : t
};

function ga(e) {
    e.target.composing = !0
}

function Kr(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Ut = Symbol("_assign"),
    lt = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: s
            }
        }, r) {
            e[Ut] = Gn(r);
            const i = s || r.props && r.props.type === "number";
            Pt(e, t ? "change" : "input", o => {
                if (o.target.composing) return;
                let l = e.value;
                n && (l = l.trim()), i && (l = Dn(l)), e[Ut](l)
            }), n && Pt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (Pt(e, "compositionstart", ga), Pt(e, "compositionend", Kr), Pt(e, "change", Kr))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {
            value: t,
            oldValue: n,
            modifiers: {
                lazy: s,
                trim: r,
                number: i
            }
        }, o) {
            if (e[Ut] = Gn(o), e.composing) return;
            const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Dn(e.value) : e.value,
                c = t ?? "";
            l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c))
        }
    },
    Wr = {
        deep: !0,
        created(e, {
            value: t,
            modifiers: {
                number: n
            }
        }, s) {
            const r = Qn(t);
            Pt(e, "change", () => {
                const i = Array.prototype.filter.call(e.options, o => o.selected).map(o => n ? Dn(zn(o)) : zn(o));
                e[Ut](e.multiple ? r ? new Set(i) : i : i[0]), e._assigning = !0, Qs(() => {
                    e._assigning = !1
                })
            }), e[Ut] = Gn(s)
        },
        mounted(e, {
            value: t
        }) {
            qr(e, t)
        },
        beforeUpdate(e, t, n) {
            e[Ut] = Gn(n)
        },
        updated(e, {
            value: t
        }) {
            e._assigning || qr(e, t)
        }
    };

function qr(e, t) {
    const n = e.multiple,
        s = j(t);
    if (!(n && !s && !Qn(t))) {
        for (let r = 0, i = e.options.length; r < i; r++) {
            const o = e.options[r],
                l = zn(o);
            if (n)
                if (s) {
                    const c = typeof l;
                    c === "string" || c === "number" ? o.selected = t.some(f => String(f) === String(l)) : o.selected = tl(t, l) > -1
                } else o.selected = t.has(l);
            else if (es(zn(o), t)) {
                e.selectedIndex !== r && (e.selectedIndex = r);
                return
            }
        }!n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}

function zn(e) {
    return "_value" in e ? e._value : e.value
}
const ma = ["ctrl", "shift", "alt", "meta"],
    ya = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => ma.some(n => e[`${n}Key`] && !t.includes(n))
    },
    va = (e, t) => {
        const n = e._withMods || (e._withMods = {}),
            s = t.join(".");
        return n[s] || (n[s] = ((r, ...i) => {
            for (let o = 0; o < t.length; o++) {
                const l = ya[t[o]];
                if (l && l(r, t)) return
            }
            return e(r, ...i)
        }))
    },
    _a = he({
        patchProp: oa
    }, Bc);
let Gr;

function ba() {
    return Gr || (Gr = ac(_a))
}
const wa = ((...e) => {
    const t = ba().createApp(...e),
        {
            mount: n
        } = t;
    return t.mount = s => {
        const r = xa(s);
        if (!r) return;
        const i = t._component;
        !V(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
        const o = n(r, !1, Sa(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o
    }, t
});

function Sa(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function xa(e) {
    return pe(e) ? document.querySelector(e) : e
}
const Ca = "/delivery/icons/ChatGPT%20Image%203%20%D0%B6%D0%BE%D0%B2%D1%82.%202025%20%D1%80.,%2015_12_24.png",
    Ea = "/delivery/icons/cart.png",
    Ot = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [s, r] of t) n[s] = r;
        return n
    },
    Ra = {
        data() {
            return {
                categories: [{
                    id: 1,
                    name: "Ноутбуки"
                }, {
                    id: 2,
                    name: "Смартфони"
                }, {
                    id: 3,
                    name: "Побутова техніка"
                }, {
                    id: 4,
                    name: "Телевізори"
                }, {
                    id: 5,
                    name: "Меблі"
                }],
                menuActive: !1
            }
        },
        methods: {
            toggleMenu() {
                this.menuActive = !this.menuActive
            }
        }
    },
    Pa = {
        class: "header"
    },
    Ta = {
        class: "nav-item"
    },
    Aa = {
        class: "nav-item dropdown"
    },
    Ia = {
        class: "dropdown-menu"
    },
    Oa = {
        class: "nav-item"
    },
    Ma = {
        class: "basket"
    };

function La(e, t, n, s, r, i) {
    const o = rn("RouterLink");
    return ce(), ae("div", Pa, [t[6] || (t[6] = w("div", {
        class: "header_logo"
    }, [w("img", {
        src: Ca,
        alt: "logo"
    })], -1)), w("div", {
        class: dn(["hamburger", {
            open: r.menuActive
        }]),
        onClick: t[0] || (t[0] = (...l) => i.toggleMenu && i.toggleMenu(...l))
    }, [...t[1] || (t[1] = [w("div", null, null, -1), w("div", null, null, -1), w("div", null, null, -1)])], 2), w("ul", {
        class: dn(["nav-list", {
            active: r.menuActive
        }])
    }, [w("li", Ta, [ue(o, {
        to: "/"
    }, {
        default: vt(() => [...t[2] || (t[2] = [cn("Головна", -1)])]),
        _: 1
    })]), w("li", Aa, [t[3] || (t[3] = w("span", {
        class: "nav-link"
    }, "Каталог", -1)), w("ul", Ia, [(ce(!0), ae(ye, null, Kt(r.categories, l => (ce(), ae("li", {
        key: l.id
    }, [ue(o, {
        to: `/category/${l.id}`
    }, {
        default: vt(() => [cn(fe(l.name), 1)]),
        _: 2
    }, 1032, ["to"])]))), 128))])]), w("li", Oa, [ue(o, {
        to: "/about"
    }, {
        default: vt(() => [...t[4] || (t[4] = [cn("Про нас", -1)])]),
        _: 1
    })])], 2), w("div", Ma, [ue(o, {
        to: "/cart"
    }, {
        default: vt(() => [...t[5] || (t[5] = [w("img", {
            src: Ea,
            alt: "cart"
        }, null, -1)])]),
        _: 1
    })])])
}
const Na = Ot(Ra, [
        ["render", La],
        ["__scopeId", "data-v-6194b7bd"]
    ]),
    $a = {
        name: "Footer"
    },
    Da = {
        class: "site-footer"
    };

function Fa(e, t, n, s, r, i) {
    return ce(), ae("footer", Da, [...t[0] || (t[0] = [w("p", null, "Сайт розроблено студенткою Зимовець Оленою, група 5-9з", -1)])])
}
const ja = Ot($a, [
        ["render", Fa],
        ["__scopeId", "data-v-7e47204e"]
    ]),
    ka = {
        components: {
            Header: Na,
            Footer: ja
        }
    },
    Ha = {
        id: "app"
    };

function Va(e, t, n, s, r, i) {
    const o = rn("Header"),
        l = rn("router-view"),
        c = rn("Footer");
    return ce(), ae("div", Ha, [ue(o), ue(l), ue(c)])
}
const Ba = Ot(ka, [
    ["render", Va]
]);
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
const Dt = typeof document < "u";

function Ao(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Ua(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && Ao(e.default)
}
const Q = Object.assign;

function ws(e, t) {
    const n = {};
    for (const s in t) {
        const r = t[s];
        n[s] = Be(r) ? r.map(e) : e(r)
    }
    return n
}
const an = () => {},
    Be = Array.isArray,
    Io = /#/g,
    Ka = /&/g,
    Wa = /\//g,
    qa = /=/g,
    Ga = /\?/g,
    Oo = /\+/g,
    za = /%5B/g,
    Ja = /%5D/g,
    Mo = /%5E/g,
    Qa = /%60/g,
    Lo = /%7B/g,
    Ya = /%7C/g,
    No = /%7D/g,
    Xa = /%20/g;

function rr(e) {
    return encodeURI("" + e).replace(Ya, "|").replace(za, "[").replace(Ja, "]")
}

function Za(e) {
    return rr(e).replace(Lo, "{").replace(No, "}").replace(Mo, "^")
}

function Ds(e) {
    return rr(e).replace(Oo, "%2B").replace(Xa, "+").replace(Io, "%23").replace(Ka, "%26").replace(Qa, "`").replace(Lo, "{").replace(No, "}").replace(Mo, "^")
}

function eu(e) {
    return Ds(e).replace(qa, "%3D")
}

function tu(e) {
    return rr(e).replace(Io, "%23").replace(Ga, "%3F")
}

function nu(e) {
    return e == null ? "" : tu(e).replace(Wa, "%2F")
}

function _n(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const su = /\/$/,
    ru = e => e.replace(su, "");

function Ss(e, t, n = "/") {
    let s, r = {},
        i = "",
        o = "";
    const l = t.indexOf("#");
    let c = t.indexOf("?");
    return l < c && l >= 0 && (c = -1), c > -1 && (s = t.slice(0, c), i = t.slice(c + 1, l > -1 ? l : t.length), r = e(i)), l > -1 && (s = s || t.slice(0, l), o = t.slice(l, t.length)), s = cu(s ?? t, n), {
        fullPath: s + (i && "?") + i + o,
        path: s,
        query: r,
        hash: _n(o)
    }
}

function iu(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function zr(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function ou(e, t, n) {
    const s = t.matched.length - 1,
        r = n.matched.length - 1;
    return s > -1 && s === r && qt(t.matched[s], n.matched[r]) && $o(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function qt(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function $o(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!lu(e[n], t[n])) return !1;
    return !0
}

function lu(e, t) {
    return Be(e) ? Jr(e, t) : Be(t) ? Jr(t, e) : e === t
}

function Jr(e, t) {
    return Be(t) ? e.length === t.length && e.every((n, s) => n === t[s]) : e.length === 1 && e[0] === t
}

function cu(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        s = e.split("/"),
        r = s[s.length - 1];
    (r === ".." || r === ".") && s.push("");
    let i = n.length - 1,
        o, l;
    for (o = 0; o < s.length; o++)
        if (l = s[o], l !== ".")
            if (l === "..") i > 1 && i--;
            else break;
    return n.slice(0, i).join("/") + "/" + s.slice(o).join("/")
}
const pt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var bn;
(function(e) {
    e.pop = "pop", e.push = "push"
})(bn || (bn = {}));
var un;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(un || (un = {}));

function au(e) {
    if (!e)
        if (Dt) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ru(e)
}
const uu = /^[^#]+#/;

function fu(e, t) {
    return e.replace(uu, "#") + t
}

function du(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        s = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: s.left - n.left - (t.left || 0),
        top: s.top - n.top - (t.top || 0)
    }
}
const as = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function pu(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            s = typeof n == "string" && n.startsWith("#"),
            r = typeof n == "string" ? s ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!r) return;
        t = du(r, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function Qr(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Fs = new Map;

function hu(e, t) {
    Fs.set(e, t)
}

function gu(e) {
    const t = Fs.get(e);
    return Fs.delete(e), t
}
let mu = () => location.protocol + "//" + location.host;

function Do(e, t) {
    const {
        pathname: n,
        search: s,
        hash: r
    } = t, i = e.indexOf("#");
    if (i > -1) {
        let l = r.includes(e.slice(i)) ? e.slice(i).length : 1,
            c = r.slice(l);
        return c[0] !== "/" && (c = "/" + c), zr(c, "")
    }
    return zr(n, e) + s + r
}

function yu(e, t, n, s) {
    let r = [],
        i = [],
        o = null;
    const l = ({
        state: h
    }) => {
        const m = Do(e, location),
            E = n.value,
            A = t.value;
        let B = 0;
        if (h) {
            if (n.value = m, t.value = h, o && o === E) {
                o = null;
                return
            }
            B = A ? h.position - A.position : 0
        } else s(m);
        r.forEach(N => {
            N(n.value, E, {
                delta: B,
                type: bn.pop,
                direction: B ? B > 0 ? un.forward : un.back : un.unknown
            })
        })
    };

    function c() {
        o = n.value
    }

    function f(h) {
        r.push(h);
        const m = () => {
            const E = r.indexOf(h);
            E > -1 && r.splice(E, 1)
        };
        return i.push(m), m
    }

    function a() {
        const {
            history: h
        } = window;
        h.state && h.replaceState(Q({}, h.state, {
            scroll: as()
        }), "")
    }

    function d() {
        for (const h of i) h();
        i = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", a)
    }
    return window.addEventListener("popstate", l), window.addEventListener("beforeunload", a, {
        passive: !0
    }), {
        pauseListeners: c,
        listen: f,
        destroy: d
    }
}

function Yr(e, t, n, s = !1, r = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: s,
        position: window.history.length,
        scroll: r ? as() : null
    }
}

function vu(e) {
    const {
        history: t,
        location: n
    } = window, s = {
        value: Do(e, n)
    }, r = {
        value: t.state
    };
    r.value || i(s.value, {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function i(c, f, a) {
        const d = e.indexOf("#"),
            h = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + c : mu() + e + c;
        try {
            t[a ? "replaceState" : "pushState"](f, "", h), r.value = f
        } catch (m) {
            console.error(m), n[a ? "replace" : "assign"](h)
        }
    }

    function o(c, f) {
        const a = Q({}, t.state, Yr(r.value.back, c, r.value.forward, !0), f, {
            position: r.value.position
        });
        i(c, a, !0), s.value = c
    }

    function l(c, f) {
        const a = Q({}, r.value, t.state, {
            forward: c,
            scroll: as()
        });
        i(a.current, a, !0);
        const d = Q({}, Yr(s.value, c, null), {
            position: a.position + 1
        }, f);
        i(c, d, !1), s.value = c
    }
    return {
        location: s,
        state: r,
        push: l,
        replace: o
    }
}

function _u(e) {
    e = au(e);
    const t = vu(e),
        n = yu(e, t.state, t.location, t.replace);

    function s(i, o = !0) {
        o || n.pauseListeners(), history.go(i)
    }
    const r = Q({
        location: "",
        base: e,
        go: s,
        createHref: fu.bind(null, e)
    }, t, n);
    return Object.defineProperty(r, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(r, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), r
}

function bu(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), _u(e)
}

function wu(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function Fo(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const jo = Symbol("");
var Xr;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Xr || (Xr = {}));

function Gt(e, t) {
    return Q(new Error, {
        type: e,
        [jo]: !0
    }, t)
}

function nt(e, t) {
    return e instanceof Error && jo in e && (t == null || !!(e.type & t))
}
const Zr = "[^/]+?",
    Su = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    xu = /[.+*?^${}()[\]/\\]/g;

function Cu(e, t) {
    const n = Q({}, Su, t),
        s = [];
    let r = n.start ? "^" : "";
    const i = [];
    for (const f of e) {
        const a = f.length ? [] : [90];
        n.strict && !f.length && (r += "/");
        for (let d = 0; d < f.length; d++) {
            const h = f[d];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (h.type === 0) d || (r += "/"), r += h.value.replace(xu, "\\$&"), m += 40;
            else if (h.type === 1) {
                const {
                    value: E,
                    repeatable: A,
                    optional: B,
                    regexp: N
                } = h;
                i.push({
                    name: E,
                    repeatable: A,
                    optional: B
                });
                const M = N || Zr;
                if (M !== Zr) {
                    m += 10;
                    try {
                        new RegExp(`(${M})`)
                    } catch (L) {
                        throw new Error(`Invalid custom RegExp for param "${E}" (${M}): ` + L.message)
                    }
                }
                let D = A ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`;
                d || (D = B && f.length < 2 ? `(?:/${D})` : "/" + D), B && (D += "?"), r += D, m += 20, B && (m += -8), A && (m += -20), M === ".*" && (m += -50)
            }
            a.push(m)
        }
        s.push(a)
    }
    if (n.strict && n.end) {
        const f = s.length - 1;
        s[f][s[f].length - 1] += .7000000000000001
    }
    n.strict || (r += "/?"), n.end ? r += "$" : n.strict && !r.endsWith("/") && (r += "(?:/|$)");
    const o = new RegExp(r, n.sensitive ? "" : "i");

    function l(f) {
        const a = f.match(o),
            d = {};
        if (!a) return null;
        for (let h = 1; h < a.length; h++) {
            const m = a[h] || "",
                E = i[h - 1];
            d[E.name] = m && E.repeatable ? m.split("/") : m
        }
        return d
    }

    function c(f) {
        let a = "",
            d = !1;
        for (const h of e) {
            (!d || !a.endsWith("/")) && (a += "/"), d = !1;
            for (const m of h)
                if (m.type === 0) a += m.value;
                else if (m.type === 1) {
                const {
                    value: E,
                    repeatable: A,
                    optional: B
                } = m, N = E in f ? f[E] : "";
                if (Be(N) && !A) throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);
                const M = Be(N) ? N.join("/") : N;
                if (!M)
                    if (B) h.length < 2 && (a.endsWith("/") ? a = a.slice(0, -1) : d = !0);
                    else throw new Error(`Missing required param "${E}"`);
                a += M
            }
        }
        return a || "/"
    }
    return {
        re: o,
        score: s,
        keys: i,
        parse: l,
        stringify: c
    }
}

function Eu(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const s = t[n] - e[n];
        if (s) return s;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function ko(e, t) {
    let n = 0;
    const s = e.score,
        r = t.score;
    for (; n < s.length && n < r.length;) {
        const i = Eu(s[n], r[n]);
        if (i) return i;
        n++
    }
    if (Math.abs(r.length - s.length) === 1) {
        if (ei(s)) return 1;
        if (ei(r)) return -1
    }
    return r.length - s.length
}

function ei(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Ru = {
        type: 0,
        value: ""
    },
    Pu = /[a-zA-Z0-9_]/;

function Tu(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Ru]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(m) {
        throw new Error(`ERR (${n})/"${f}": ${m}`)
    }
    let n = 0,
        s = n;
    const r = [];
    let i;

    function o() {
        i && r.push(i), i = []
    }
    let l = 0,
        c, f = "",
        a = "";

    function d() {
        f && (n === 0 ? i.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), i.push({
            type: 1,
            value: f,
            regexp: a,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?"
        })) : t("Invalid state to consume buffer"), f = "")
    }

    function h() {
        f += c
    }
    for (; l < e.length;) {
        if (c = e[l++], c === "\\" && n !== 2) {
            s = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                c === "/" ? (f && d(), o()) : c === ":" ? (d(), n = 1) : h();
                break;
            case 4:
                h(), n = s;
                break;
            case 1:
                c === "(" ? n = 2 : Pu.test(c) ? h() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
                break;
            case 2:
                c === ")" ? a[a.length - 1] == "\\" ? a = a.slice(0, -1) + c : n = 3 : a += c;
                break;
            case 3:
                d(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, a = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), d(), o(), r
}

function Au(e, t, n) {
    const s = Cu(Tu(e.path), n),
        r = Q(s, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
}

function Iu(e, t) {
    const n = [],
        s = new Map;
    t = ri({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function r(d) {
        return s.get(d)
    }

    function i(d, h, m) {
        const E = !m,
            A = ni(d);
        A.aliasOf = m && m.record;
        const B = ri(t, d),
            N = [A];
        if ("alias" in d) {
            const L = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const K of L) N.push(ni(Q({}, A, {
                components: m ? m.record.components : A.components,
                path: K,
                aliasOf: m ? m.record : A
            })))
        }
        let M, D;
        for (const L of N) {
            const {
                path: K
            } = L;
            if (h && K[0] !== "/") {
                const ne = h.record.path,
                    Z = ne[ne.length - 1] === "/" ? "" : "/";
                L.path = h.record.path + (K && Z + K)
            }
            if (M = Au(L, h, B), m ? m.alias.push(M) : (D = D || M, D !== M && D.alias.push(M), E && d.name && !si(M) && o(d.name)), Ho(M) && c(M), A.children) {
                const ne = A.children;
                for (let Z = 0; Z < ne.length; Z++) i(ne[Z], M, m && m.children[Z])
            }
            m = m || M
        }
        return D ? () => {
            o(D)
        } : an
    }

    function o(d) {
        if (Fo(d)) {
            const h = s.get(d);
            h && (s.delete(d), n.splice(n.indexOf(h), 1), h.children.forEach(o), h.alias.forEach(o))
        } else {
            const h = n.indexOf(d);
            h > -1 && (n.splice(h, 1), d.record.name && s.delete(d.record.name), d.children.forEach(o), d.alias.forEach(o))
        }
    }

    function l() {
        return n
    }

    function c(d) {
        const h = Lu(d, n);
        n.splice(h, 0, d), d.record.name && !si(d) && s.set(d.record.name, d)
    }

    function f(d, h) {
        let m, E = {},
            A, B;
        if ("name" in d && d.name) {
            if (m = s.get(d.name), !m) throw Gt(1, {
                location: d
            });
            B = m.record.name, E = Q(ti(h.params, m.keys.filter(D => !D.optional).concat(m.parent ? m.parent.keys.filter(D => D.optional) : []).map(D => D.name)), d.params && ti(d.params, m.keys.map(D => D.name))), A = m.stringify(E)
        } else if (d.path != null) A = d.path, m = n.find(D => D.re.test(A)), m && (E = m.parse(A), B = m.record.name);
        else {
            if (m = h.name ? s.get(h.name) : n.find(D => D.re.test(h.path)), !m) throw Gt(1, {
                location: d,
                currentLocation: h
            });
            B = m.record.name, E = Q({}, h.params, d.params), A = m.stringify(E)
        }
        const N = [];
        let M = m;
        for (; M;) N.unshift(M.record), M = M.parent;
        return {
            name: B,
            path: A,
            params: E,
            matched: N,
            meta: Mu(N)
        }
    }
    e.forEach(d => i(d));

    function a() {
        n.length = 0, s.clear()
    }
    return {
        addRoute: i,
        resolve: f,
        removeRoute: o,
        clearRoutes: a,
        getRoutes: l,
        getRecordMatcher: r
    }
}

function ti(e, t) {
    const n = {};
    for (const s of t) s in e && (n[s] = e[s]);
    return n
}

function ni(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: Ou(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function Ou(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const s in e.components) t[s] = typeof n == "object" ? n[s] : n;
    return t
}

function si(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Mu(e) {
    return e.reduce((t, n) => Q(t, n.meta), {})
}

function ri(e, t) {
    const n = {};
    for (const s in e) n[s] = s in t ? t[s] : e[s];
    return n
}

function Lu(e, t) {
    let n = 0,
        s = t.length;
    for (; n !== s;) {
        const i = n + s >> 1;
        ko(e, t[i]) < 0 ? s = i : n = i + 1
    }
    const r = Nu(e);
    return r && (s = t.lastIndexOf(r, s - 1)), s
}

function Nu(e) {
    let t = e;
    for (; t = t.parent;)
        if (Ho(t) && ko(e, t) === 0) return t
}

function Ho({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function $u(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const s = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let r = 0; r < s.length; ++r) {
        const i = s[r].replace(Oo, " "),
            o = i.indexOf("="),
            l = _n(o < 0 ? i : i.slice(0, o)),
            c = o < 0 ? null : _n(i.slice(o + 1));
        if (l in t) {
            let f = t[l];
            Be(f) || (f = t[l] = [f]), f.push(c)
        } else t[l] = c
    }
    return t
}

function ii(e) {
    let t = "";
    for (let n in e) {
        const s = e[n];
        if (n = eu(n), s == null) {
            s !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(Be(s) ? s.map(i => i && Ds(i)) : [s && Ds(s)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n, i != null && (t += "=" + i))
        })
    }
    return t
}

function Du(e) {
    const t = {};
    for (const n in e) {
        const s = e[n];
        s !== void 0 && (t[n] = Be(s) ? s.map(r => r == null ? null : "" + r) : s == null ? s : "" + s)
    }
    return t
}
const Fu = Symbol(""),
    oi = Symbol(""),
    ir = Symbol(""),
    Vo = Symbol(""),
    js = Symbol("");

function Yt() {
    let e = [];

    function t(s) {
        return e.push(s), () => {
            const r = e.indexOf(s);
            r > -1 && e.splice(r, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function yt(e, t, n, s, r, i = o => o()) {
    const o = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
    return () => new Promise((l, c) => {
        const f = h => {
                h === !1 ? c(Gt(4, {
                    from: n,
                    to: t
                })) : h instanceof Error ? c(h) : wu(h) ? c(Gt(2, {
                    from: t,
                    to: h
                })) : (o && s.enterCallbacks[r] === o && typeof h == "function" && o.push(h), l())
            },
            a = i(() => e.call(s && s.instances[r], t, n, f));
        let d = Promise.resolve(a);
        e.length < 3 && (d = d.then(f)), d.catch(h => c(h))
    })
}

function xs(e, t, n, s, r = i => i()) {
    const i = [];
    for (const o of e)
        for (const l in o.components) {
            let c = o.components[l];
            if (!(t !== "beforeRouteEnter" && !o.instances[l]))
                if (Ao(c)) {
                    const a = (c.__vccOpts || c)[t];
                    a && i.push(yt(a, n, s, o, l, r))
                } else {
                    let f = c();
                    i.push(() => f.then(a => {
                        if (!a) throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);
                        const d = Ua(a) ? a.default : a;
                        o.mods[l] = a, o.components[l] = d;
                        const m = (d.__vccOpts || d)[t];
                        return m && yt(m, n, s, o, l, r)()
                    }))
                }
        }
    return i
}

function li(e) {
    const t = Xe(ir),
        n = Xe(Vo),
        s = ke(() => {
            const c = Ht(e.to);
            return t.resolve(c)
        }),
        r = ke(() => {
            const {
                matched: c
            } = s.value, {
                length: f
            } = c, a = c[f - 1], d = n.matched;
            if (!a || !d.length) return -1;
            const h = d.findIndex(qt.bind(null, a));
            if (h > -1) return h;
            const m = ci(c[f - 2]);
            return f > 1 && ci(a) === m && d[d.length - 1].path !== m ? d.findIndex(qt.bind(null, c[f - 2])) : h
        }),
        i = ke(() => r.value > -1 && Bu(n.params, s.value.params)),
        o = ke(() => r.value > -1 && r.value === n.matched.length - 1 && $o(n.params, s.value.params));

    function l(c = {}) {
        if (Vu(c)) {
            const f = t[Ht(e.replace) ? "replace" : "push"](Ht(e.to)).catch(an);
            return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => f), f
        }
        return Promise.resolve()
    }
    return {
        route: s,
        href: ke(() => s.value.href),
        isActive: i,
        isExactActive: o,
        navigate: l
    }
}

function ju(e) {
    return e.length === 1 ? e[0] : e
}
const ku = Gi({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            },
            viewTransition: Boolean
        },
        useLink: li,
        setup(e, {
            slots: t
        }) {
            const n = ns(li(e)),
                {
                    options: s
                } = Xe(ir),
                r = ke(() => ({
                    [ai(e.activeClass, s.linkActiveClass, "router-link-active")]: n.isActive,
                    [ai(e.exactActiveClass, s.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const i = t.default && ju(t.default(n));
                return e.custom ? i : sr("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, i)
            }
        }
    }),
    Hu = ku;

function Vu(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Bu(e, t) {
    for (const n in t) {
        const s = t[n],
            r = e[n];
        if (typeof s == "string") {
            if (s !== r) return !1
        } else if (!Be(r) || r.length !== s.length || s.some((i, o) => i !== r[o])) return !1
    }
    return !0
}

function ci(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const ai = (e, t, n) => e ?? t ?? n,
    Uu = Gi({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const s = Xe(js),
                r = ke(() => e.route || s.value),
                i = Xe(oi, 0),
                o = ke(() => {
                    let f = Ht(i);
                    const {
                        matched: a
                    } = r.value;
                    let d;
                    for (;
                        (d = a[f]) && !d.components;) f++;
                    return f
                }),
                l = ke(() => r.value.matched[o.value]);
            In(oi, ke(() => o.value + 1)), In(Fu, l), In(js, r);
            const c = xl();
            return On(() => [c.value, l.value, e.name], ([f, a, d], [h, m, E]) => {
                a && (a.instances[d] = f, m && m !== a && f && f === h && (a.leaveGuards.size || (a.leaveGuards = m.leaveGuards), a.updateGuards.size || (a.updateGuards = m.updateGuards))), f && a && (!m || !qt(a, m) || !h) && (a.enterCallbacks[d] || []).forEach(A => A(f))
            }, {
                flush: "post"
            }), () => {
                const f = r.value,
                    a = e.name,
                    d = l.value,
                    h = d && d.components[a];
                if (!h) return ui(n.default, {
                    Component: h,
                    route: f
                });
                const m = d.props[a],
                    E = m ? m === !0 ? f.params : typeof m == "function" ? m(f) : m : null,
                    B = sr(h, Q({}, E, t, {
                        onVnodeUnmounted: N => {
                            N.component.isUnmounted && (d.instances[a] = null)
                        },
                        ref: c
                    }));
                return ui(n.default, {
                    Component: B,
                    route: f
                }) || B
            }
        }
    });

function ui(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Ku = Uu;

function Wu(e) {
    const t = Iu(e.routes, e),
        n = e.parseQuery || $u,
        s = e.stringifyQuery || ii,
        r = e.history,
        i = Yt(),
        o = Yt(),
        l = Yt(),
        c = Cl(pt);
    let f = pt;
    Dt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const a = ws.bind(null, _ => "" + _),
        d = ws.bind(null, nu),
        h = ws.bind(null, _n);

    function m(_, I) {
        let P, $;
        return Fo(_) ? (P = t.getRecordMatcher(_), $ = I) : $ = _, t.addRoute($, P)
    }

    function E(_) {
        const I = t.getRecordMatcher(_);
        I && t.removeRoute(I)
    }

    function A() {
        return t.getRoutes().map(_ => _.record)
    }

    function B(_) {
        return !!t.getRecordMatcher(_)
    }

    function N(_, I) {
        if (I = Q({}, I || c.value), typeof _ == "string") {
            const g = Ss(n, _, I.path),
                v = t.resolve({
                    path: g.path
                }, I),
                b = r.createHref(g.fullPath);
            return Q(g, v, {
                params: h(v.params),
                hash: _n(g.hash),
                redirectedFrom: void 0,
                href: b
            })
        }
        let P;
        if (_.path != null) P = Q({}, _, {
            path: Ss(n, _.path, I.path).path
        });
        else {
            const g = Q({}, _.params);
            for (const v in g) g[v] == null && delete g[v];
            P = Q({}, _, {
                params: d(g)
            }), I.params = d(I.params)
        }
        const $ = t.resolve(P, I),
            se = _.hash || "";
        $.params = a(h($.params));
        const u = iu(s, Q({}, _, {
                hash: Za(se),
                path: $.path
            })),
            p = r.createHref(u);
        return Q({
            fullPath: u,
            hash: se,
            query: s === ii ? Du(_.query) : _.query || {}
        }, $, {
            redirectedFrom: void 0,
            href: p
        })
    }

    function M(_) {
        return typeof _ == "string" ? Ss(n, _, c.value.path) : Q({}, _)
    }

    function D(_, I) {
        if (f !== _) return Gt(8, {
            from: I,
            to: _
        })
    }

    function L(_) {
        return Z(_)
    }

    function K(_) {
        return L(Q(M(_), {
            replace: !0
        }))
    }

    function ne(_) {
        const I = _.matched[_.matched.length - 1];
        if (I && I.redirect) {
            const {
                redirect: P
            } = I;
            let $ = typeof P == "function" ? P(_) : P;
            return typeof $ == "string" && ($ = $.includes("?") || $.includes("#") ? $ = M($) : {
                path: $
            }, $.params = {}), Q({
                query: _.query,
                hash: _.hash,
                params: $.path != null ? {} : _.params
            }, $)
        }
    }

    function Z(_, I) {
        const P = f = N(_),
            $ = c.value,
            se = _.state,
            u = _.force,
            p = _.replace === !0,
            g = ne(P);
        if (g) return Z(Q(M(g), {
            state: typeof g == "object" ? Q({}, se, g.state) : se,
            force: u,
            replace: p
        }), I || P);
        const v = P;
        v.redirectedFrom = I;
        let b;
        return !u && ou(s, $, P) && (b = Gt(16, {
            to: v,
            from: $
        }), Ue($, $, !0, !1)), (b ? Promise.resolve(b) : G(v, $)).catch(y => nt(y) ? nt(y, 2) ? y : ft(y) : J(y, v, $)).then(y => {
            if (y) {
                if (nt(y, 2)) return Z(Q({
                    replace: p
                }, M(y.to), {
                    state: typeof y.to == "object" ? Q({}, se, y.to.state) : se,
                    force: u
                }), I || v)
            } else y = O(v, $, !0, p, se);
            return ie(v, $, y), y
        })
    }

    function ve(_, I) {
        const P = D(_, I);
        return P ? Promise.reject(P) : Promise.resolve()
    }

    function U(_) {
        const I = Lt.values().next().value;
        return I && typeof I.runWithContext == "function" ? I.runWithContext(_) : _()
    }

    function G(_, I) {
        let P;
        const [$, se, u] = qu(_, I);
        P = xs($.reverse(), "beforeRouteLeave", _, I);
        for (const g of $) g.leaveGuards.forEach(v => {
            P.push(yt(v, _, I))
        });
        const p = ve.bind(null, _, I);
        return P.push(p), Ne(P).then(() => {
            P = [];
            for (const g of i.list()) P.push(yt(g, _, I));
            return P.push(p), Ne(P)
        }).then(() => {
            P = xs(se, "beforeRouteUpdate", _, I);
            for (const g of se) g.updateGuards.forEach(v => {
                P.push(yt(v, _, I))
            });
            return P.push(p), Ne(P)
        }).then(() => {
            P = [];
            for (const g of u)
                if (g.beforeEnter)
                    if (Be(g.beforeEnter))
                        for (const v of g.beforeEnter) P.push(yt(v, _, I));
                    else P.push(yt(g.beforeEnter, _, I));
            return P.push(p), Ne(P)
        }).then(() => (_.matched.forEach(g => g.enterCallbacks = {}), P = xs(u, "beforeRouteEnter", _, I, U), P.push(p), Ne(P))).then(() => {
            P = [];
            for (const g of o.list()) P.push(yt(g, _, I));
            return P.push(p), Ne(P)
        }).catch(g => nt(g, 8) ? g : Promise.reject(g))
    }

    function ie(_, I, P) {
        l.list().forEach($ => U(() => $(_, I, P)))
    }

    function O(_, I, P, $, se) {
        const u = D(_, I);
        if (u) return u;
        const p = I === pt,
            g = Dt ? history.state : {};
        P && ($ || p ? r.replace(_.fullPath, Q({
            scroll: p && g && g.scroll
        }, se)) : r.push(_.fullPath, se)), c.value = _, Ue(_, I, P, p), ft()
    }
    let z;

    function ge() {
        z || (z = r.listen((_, I, P) => {
            if (!Cn.listening) return;
            const $ = N(_),
                se = ne($);
            if (se) {
                Z(Q(se, {
                    replace: !0,
                    force: !0
                }), $).catch(an);
                return
            }
            f = $;
            const u = c.value;
            Dt && hu(Qr(u.fullPath, P.delta), as()), G($, u).catch(p => nt(p, 12) ? p : nt(p, 2) ? (Z(Q(M(p.to), {
                force: !0
            }), $).then(g => {
                nt(g, 20) && !P.delta && P.type === bn.pop && r.go(-1, !1)
            }).catch(an), Promise.reject()) : (P.delta && r.go(-P.delta, !1), J(p, $, u))).then(p => {
                p = p || O($, u, !1), p && (P.delta && !nt(p, 8) ? r.go(-P.delta, !1) : P.type === bn.pop && nt(p, 20) && r.go(-1, !1)), ie($, u, p)
            }).catch(an)
        }))
    }
    let Ae = Yt(),
        de = Yt(),
        ee;

    function J(_, I, P) {
        ft(_);
        const $ = de.list();
        return $.length ? $.forEach(se => se(_, I, P)) : console.error(_), Promise.reject(_)
    }

    function et() {
        return ee && c.value !== pt ? Promise.resolve() : new Promise((_, I) => {
            Ae.add([_, I])
        })
    }

    function ft(_) {
        return ee || (ee = !_, ge(), Ae.list().forEach(([I, P]) => _ ? P(_) : I()), Ae.reset()), _
    }

    function Ue(_, I, P, $) {
        const {
            scrollBehavior: se
        } = e;
        if (!Dt || !se) return Promise.resolve();
        const u = !P && gu(Qr(_.fullPath, 0)) || ($ || !P) && history.state && history.state.scroll || null;
        return Qs().then(() => se(_, I, u)).then(p => p && pu(p)).catch(p => J(p, _, I))
    }
    const Ee = _ => r.go(_);
    let Mt;
    const Lt = new Set,
        Cn = {
            currentRoute: c,
            listening: !0,
            addRoute: m,
            removeRoute: E,
            clearRoutes: t.clearRoutes,
            hasRoute: B,
            getRoutes: A,
            resolve: N,
            options: e,
            push: L,
            replace: K,
            go: Ee,
            back: () => Ee(-1),
            forward: () => Ee(1),
            beforeEach: i.add,
            beforeResolve: o.add,
            afterEach: l.add,
            onError: de.add,
            isReady: et,
            install(_) {
                const I = this;
                _.component("RouterLink", Hu), _.component("RouterView", Ku), _.config.globalProperties.$router = I, Object.defineProperty(_.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => Ht(c)
                }), Dt && !Mt && c.value === pt && (Mt = !0, L(r.location).catch(se => {}));
                const P = {};
                for (const se in pt) Object.defineProperty(P, se, {
                    get: () => c.value[se],
                    enumerable: !0
                });
                _.provide(ir, I), _.provide(Vo, Li(P)), _.provide(js, c);
                const $ = _.unmount;
                Lt.add(_), _.unmount = function() {
                    Lt.delete(_), Lt.size < 1 && (f = pt, z && z(), z = null, c.value = pt, Mt = !1, ee = !1), $()
                }
            }
        };

    function Ne(_) {
        return _.reduce((I, P) => I.then(() => U(P)), Promise.resolve())
    }
    return Cn
}

function qu(e, t) {
    const n = [],
        s = [],
        r = [],
        i = Math.max(t.matched.length, e.matched.length);
    for (let o = 0; o < i; o++) {
        const l = t.matched[o];
        l && (e.matched.find(f => qt(f, l)) ? s.push(l) : n.push(l));
        const c = e.matched[o];
        c && (t.matched.find(f => qt(f, c)) || r.push(c))
    }
    return [n, s, r]
}
const Gu = {
        name: "Home",
        data() {
            return {
                features: [{
                    icon: "🛒",
                    title: "Зручний кошик",
                    description: "Керуйте товарами та кількістю без зайвих кроків."
                }, {
                    icon: "🏷️",
                    title: "Категорії товарів",
                    description: "Швидкий доступ до всіх категорій та товарів."
                }, {
                    icon: "🚚",
                    title: "Доставка",
                    description: "Розрахунок вартості доставки по містах та типах."
                }, {
                    icon: "💻",
                    title: "Сучасний фронтенд",
                    description: "Використання Vue.js, компонентів та локального сховища."
                }],
                promoItems: [{
                    id: 1,
                    name: "Ноутбук Lenovo IdeaPad 3",
                    price: 15e3,
                    image: "/delivery/laptop/6.webp",
                    categoryId: 1
                }, {
                    id: 2,
                    name: "iPhone 14 Pro",
                    price: 45e3,
                    image: "/delivery/phone/1.png",
                    categoryId: 2
                }, {
                    id: 3,
                    name: "Холодильник Samsung RB38",
                    price: 3e4,
                    image: "/delivery/tech/6.avif",
                    categoryId: 3
                }, {
                    id: 4,
                    name: "LG OLED55",
                    price: 35e3,
                    image: "/delivery/monitor/6.webp",
                    categoryId: 4
                }]
            }
        }
    },
    zu = {
        class: "home-page"
    },
    Ju = {
        class: "hero"
    },
    Qu = {
        class: "hero-buttons"
    },
    Yu = {
        class: "features"
    },
    Xu = {
        class: "feature-icon"
    },
    Zu = {
        class: "promo"
    },
    ef = {
        class: "promo-cards"
    },
    tf = ["src"];

function nf(e, t, n, s, r, i) {
    const o = rn("router-link");
    return ce(), ae("div", zu, [w("section", Ju, [t[1] || (t[1] = w("h1", {
        class: "hero-title"
    }, "Ласкаво просимо до нашого магазину", -1)), t[2] || (t[2] = w("p", {
        class: "hero-subtitle"
    }, " Переглядайте товари, додавайте їх до кошика та оформлюйте замовлення швидко та зручно. ", -1)), w("div", Qu, [ue(o, {
        to: "/about",
        class: "btn btn-secondary"
    }, {
        default: vt(() => [...t[0] || (t[0] = [cn("Про нас", -1)])]),
        _: 1
    })])]), w("section", Yu, [(ce(!0), ae(ye, null, Kt(r.features, (l, c) => (ce(), ae("div", {
        class: "feature-card",
        key: c,
        style: fn({
            animationDelay: c * .2 + "s"
        })
    }, [w("div", Xu, fe(l.icon), 1), w("h3", null, fe(l.title), 1), w("p", null, fe(l.description), 1)], 4))), 128))]), w("section", Zu, [t[3] || (t[3] = w("h2", {
        class: "promo-title"
    }, "🔥 Топ-пропозиції цього місяця", -1)), w("div", ef, [(ce(!0), ae(ye, null, Kt(r.promoItems, (l, c) => (ce(), ae("div", {
        key: l.id,
        class: "promo-card",
        style: fn({
            animationDelay: c * .2 + "s"
        })
    }, [w("img", {
        src: l.image,
        alt: ""
    }, null, 8, tf), w("h3", null, fe(l.name), 1), w("p", null, "Ціна: " + fe(l.price) + " грн", 1)], 4))), 128))])])])
}
const sf = Ot(Gu, [
        ["render", nf],
        ["__scopeId", "data-v-fa455b7c"]
    ]),
    rf = {
        props: ["id"],
        data() {
            return {
                products: [{
                    id: 1,
                    name: "Ноутбук Lenovo IdeaPad 3",
                    weight: 2,
                    price: 15e3,
                    categoryId: 1,
                    image: "/delivery/laptop/6.webp"
                }, {
                    id: 2,
                    name: "Ноутбук ASUS Vivobook",
                    weight: 2.3,
                    price: 17e3,
                    categoryId: 1,
                    image: "/delivery/laptop/5.jpg"
                }, {
                    id: 3,
                    name: "Ноутбук HP Pavilion",
                    weight: 2.1,
                    price: 16e3,
                    categoryId: 1,
                    image: "/delivery/laptop/4.webp"
                }, {
                    id: 4,
                    name: "Ноутбук Acer Aspire 5",
                    weight: 2.2,
                    price: 15500,
                    categoryId: 1,
                    image: "/delivery/laptop/1.jpg"
                }, {
                    id: 5,
                    name: "Ноутбук Dell Inspiron 15",
                    weight: 2.4,
                    price: 17500,
                    categoryId: 1,
                    image: "/delivery/laptop/2.jpg"
                }, {
                    id: 6,
                    name: "Ноутбук Apple MacBook Air",
                    weight: 1.3,
                    price: 35e3,
                    categoryId: 1,
                    image: "/delivery/laptop/3.jpeg"
                }, {
                    id: 7,
                    name: "iPhone 14 Pro",
                    weight: .3,
                    price: 45e3,
                    categoryId: 2,
                    image: "/delivery/phone/1.png"
                }, {
                    id: 8,
                    name: "Samsung Galaxy S23",
                    weight: .31,
                    price: 4e4,
                    categoryId: 2,
                    image: "/delivery/phone/5.webp"
                }, {
                    id: 9,
                    name: "Xiaomi Redmi Note 12",
                    weight: .35,
                    price: 12e3,
                    categoryId: 2,
                    image: "/delivery/phone/3.jpg"
                }, {
                    id: 10,
                    name: "Google Pixel 7",
                    weight: .32,
                    price: 25e3,
                    categoryId: 2,
                    image: "/delivery/phone/6.jpg"
                }, {
                    id: 11,
                    name: "OnePlus 11",
                    weight: .33,
                    price: 3e4,
                    categoryId: 2,
                    image: "/delivery/phone/4.jpg"
                }, {
                    id: 12,
                    name: "Samsung Galaxy A54",
                    weight: .34,
                    price: 15e3,
                    categoryId: 2,
                    image: "/delivery/phone/2.jpg"
                }, {
                    id: 13,
                    name: "Пральна машина Bosch Serie 6",
                    weight: 60,
                    price: 25e3,
                    categoryId: 3,
                    image: "/delivery/tech/4.jpg"
                }, {
                    id: 14,
                    name: "Холодильник Samsung RB38",
                    weight: 80,
                    price: 3e4,
                    categoryId: 3,
                    image: "/delivery/tech/6.avif"
                }, {
                    id: 15,
                    name: "Мікрохвильова піч Panasonic",
                    weight: 12,
                    price: 4500,
                    categoryId: 3,
                    image: "/delivery/tech/5.jpg"
                }, {
                    id: 16,
                    name: "Пилосос Dyson V15",
                    weight: 3,
                    price: 2e4,
                    categoryId: 3,
                    image: "/delivery/tech/1.jpeg"
                }, {
                    id: 17,
                    name: "Кавоварка DeLonghi",
                    weight: 4,
                    price: 9e3,
                    categoryId: 3,
                    image: "/delivery/tech/2.jpg"
                }, {
                    id: 18,
                    name: "Кондиціонер LG Dual Inverter",
                    weight: 35,
                    price: 28e3,
                    categoryId: 3,
                    image: "/delivery/tech/3.jpg"
                }, {
                    id: 19,
                    name: "LG OLED55",
                    weight: 15,
                    price: 35e3,
                    categoryId: 4,
                    image: "/delivery/monitor/6.webp"
                }, {
                    id: 20,
                    name: "Samsung QLED Q80",
                    weight: 17,
                    price: 4e4,
                    categoryId: 4,
                    image: "/delivery/monitor/2.jpg"
                }, {
                    id: 21,
                    name: "Sony Bravia XR",
                    weight: 18,
                    price: 45e3,
                    categoryId: 4,
                    image: "/delivery/monitor/5.webp"
                }, {
                    id: 22,
                    name: "Philips Ambilight 55PUS",
                    weight: 16,
                    price: 3e4,
                    categoryId: 4,
                    image: "/delivery/monitor/4.png"
                }, {
                    id: 23,
                    name: "TCL 6-Series 55R635",
                    weight: 17,
                    price: 25e3,
                    categoryId: 4,
                    image: "/delivery/monitor/3.jpg"
                }, {
                    id: 24,
                    name: "Hisense U8G 55",
                    weight: 18,
                    price: 22e3,
                    categoryId: 4,
                    image: "/delivery/monitor/1.jpg"
                }, {
                    id: 25,
                    name: "Стіл офісний IKEA Bekant",
                    weight: 30,
                    price: 8e3,
                    categoryId: 5,
                    image: "/delivery/mb/2.webp"
                }, {
                    id: 26,
                    name: "Крісло Cougar Armor",
                    weight: 20,
                    price: 6e3,
                    categoryId: 5,
                    image: "/delivery/mb/1.webp"
                }, {
                    id: 27,
                    name: "Шафа BRW Modern",
                    weight: 45,
                    price: 12e3,
                    categoryId: 5,
                    image: "/delivery/mb/5.jpg"
                }, {
                    id: 28,
                    name: "Ліжко IKEA Malm",
                    weight: 50,
                    price: 15e3,
                    categoryId: 5,
                    image: "/delivery/mb/3.webp"
                }, {
                    id: 29,
                    name: "Комод BRW Porto",
                    weight: 40,
                    price: 1e4,
                    categoryId: 5,
                    image: "/delivery/mb/4.jpg"
                }, {
                    id: 30,
                    name: "Тумба прикроватна IKEA Hemnes",
                    weight: 15,
                    price: 4e3,
                    categoryId: 5,
                    image: "/delivery/mb/6.jpg"
                }],
                categories: [{
                    id: 1,
                    name: "Ноутбуки"
                }, {
                    id: 2,
                    name: "Смартфони"
                }, {
                    id: 3,
                    name: "Побутова техніка"
                }, {
                    id: 4,
                    name: "Телевізори"
                }, {
                    id: 5,
                    name: "Меблі"
                }],
                weightRange: [0, 100],
                priceRange: [0, 5e4]
            }
        },
        setup() {
            return {
                cart: Xe("cart")
            }
        },
        computed: {
            categoryProducts() {
                return this.products.filter(e => e.categoryId === parseInt(this.id))
            },
            filteredProducts() {
                return this.categoryProducts.filter(e => e.weight >= this.weightRange[0] && e.weight <= this.weightRange[1] && e.price >= this.priceRange[0] && e.price <= this.priceRange[1])
            },
            categoryName() {
                const e = this.categories.find(t => t.id === parseInt(this.id));
                return e ? e.name : "Невідома категорія"
            },
            minWeight() {
                return Math.min(...this.categoryProducts.map(e => e.weight))
            },
            maxWeight() {
                return Math.max(...this.categoryProducts.map(e => e.weight))
            },
            minPrice() {
                return Math.min(...this.categoryProducts.map(e => e.price))
            },
            maxPrice() {
                return Math.max(...this.categoryProducts.map(e => e.price))
            }
        },
        methods: {
            addToCart(e) {
                let t = JSON.parse(localStorage.getItem("cart")) || [];
                const n = t.find(s => s.id === e.id);
                n ? n.quantity++ : t.push({
                    ...e,
                    quantity: 1
                }), localStorage.setItem("cart", JSON.stringify(t)), alert(`Товар "${e.name}" додано в кошик ✅`)
            }
        }
    },
    of = {
        class: "category-page"
    },
    lf = {
        class: "content-wrapper"
    },
    cf = {
        class: "filter-panel"
    },
    af = {
        class: "filter-group"
    },
    uf = ["min", "max"],
    ff = ["min", "max"],
    df = {
        class: "filter-group"
    },
    pf = ["min", "max"],
    hf = ["min", "max"],
    gf = {
        class: "products-wrapper"
    },
    mf = ["src"],
    yf = ["onClick"],
    vf = {
        key: 0,
        class: "no-products"
    };

function _f(e, t, n, s, r, i) {
    return ce(), ae("div", of, [w("h2", null, "Категорія: " + fe(i.categoryName), 1), w("div", lf, [w("div", cf, [t[4] || (t[4] = w("h3", null, "Фільтр товарів", -1)), w("div", af, [w("label", null, "Вага (кг): " + fe(r.weightRange[0]) + " - " + fe(r.weightRange[1]), 1), je(w("input", {
        type: "range",
        min: i.minWeight,
        max: i.maxWeight,
        "onUpdate:modelValue": t[0] || (t[0] = o => r.weightRange[0] = o)
    }, null, 8, uf), [
        [lt, r.weightRange[0], void 0, {
            number: !0
        }]
    ]), je(w("input", {
        type: "range",
        min: r.weightRange[0],
        max: i.maxWeight,
        "onUpdate:modelValue": t[1] || (t[1] = o => r.weightRange[1] = o)
    }, null, 8, ff), [
        [lt, r.weightRange[1], void 0, {
            number: !0
        }]
    ])]), w("div", df, [w("label", null, "Ціна (грн): " + fe(r.priceRange[0]) + " - " + fe(r.priceRange[1]), 1), je(w("input", {
        type: "range",
        min: i.minPrice,
        max: i.maxPrice,
        "onUpdate:modelValue": t[2] || (t[2] = o => r.priceRange[0] = o)
    }, null, 8, pf), [
        [lt, r.priceRange[0], void 0, {
            number: !0
        }]
    ]), je(w("input", {
        type: "range",
        min: r.priceRange[0],
        max: i.maxPrice,
        "onUpdate:modelValue": t[3] || (t[3] = o => r.priceRange[1] = o)
    }, null, 8, hf), [
        [lt, r.priceRange[1], void 0, {
            number: !0
        }]
    ])])]), w("div", gf, [ue(ua, {
        name: "product-card",
        tag: "div",
        class: "products-grid"
    }, {
        default: vt(() => [(ce(!0), ae(ye, null, Kt(i.filteredProducts, o => (ce(), ae("div", {
            key: o.id,
            class: "product-card"
        }, [w("img", {
            src: o.image,
            alt: "",
            class: "product-image"
        }, null, 8, mf), w("h3", null, fe(o.name), 1), w("p", null, "Вага: " + fe(o.weight) + " кг", 1), w("p", null, "Ціна: " + fe(o.price) + " грн", 1), w("button", {
            class: "btn",
            onClick: l => i.addToCart(o)
        }, "Додати в кошик", 8, yf)]))), 128))]),
        _: 1
    }), i.filteredProducts.length === 0 ? (ce(), ae("p", vf, " Товара за даними характеристиками не знайдено ")) : Nn("", !0)])])])
}
const bf = Ot(rf, [
        ["render", _f],
        ["__scopeId", "data-v-e36b7e35"]
    ]),
    wf = {
        data() {
            return {
                cart: [],
                showPopup: !1,
                form: {
                    firstName: "",
                    lastName: "",
                    phone: "",
                    city: null,
                    deliveryType: "courier",
                    address: "",
                    office: ""
                },
                cities: [{
                    name: "Київ",
                    rate: 50
                }, {
                    name: "Львів",
                    rate: 60
                }, {
                    name: "Одеса",
                    rate: 70
                }, {
                    name: "Харків",
                    rate: 65
                }, {
                    name: "Дніпро",
                    rate: 55
                }]
            }
        },
        computed: {
            totalSum() {
                return this.cart.reduce((e, t) => e + t.price * t.quantity, 0)
            },
            totalWeight() {
                return this.cart.reduce((e, t) => e + t.weight * t.quantity, 0)
            },
            deliveryCost() {
                if (!this.form.city) return 0;
                let e = this.form.deliveryType === "courier" ? 1 : 1.5;
                return this.totalWeight * this.form.city.rate * e
            },
            totalWithDelivery() {
                return this.totalSum + this.deliveryCost
            }
        },
        methods: {
            loadCart() {
                this.cart = JSON.parse(localStorage.getItem("cart")) || []
            },
            increase(e) {
                e.quantity++, localStorage.setItem("cart", JSON.stringify(this.cart))
            },
            decrease(e) {
                e.quantity > 1 && e.quantity--, localStorage.setItem("cart", JSON.stringify(this.cart))
            },
            remove(e) {
                this.cart = this.cart.filter(t => t.id !== e.id), localStorage.setItem("cart", JSON.stringify(this.cart))
            },
            clearCart() {
                this.cart = [], localStorage.removeItem("cart")
            },
            submitOrder() {
                alert(`Замовлення оформлено! Сума з доставкою: ${this.totalWithDelivery} грн ✅`), this.clearCart(), this.showPopup = !1, this.form = {
                    firstName: "",
                    lastName: "",
                    phone: "",
                    city: null,
                    deliveryType: "courier",
                    address: "",
                    office: ""
                }
            }
        },
        mounted() {
            this.loadCart(), window.addEventListener("storage", this.loadCart)
        },
        beforeUnmount() {
            window.removeEventListener("storage", this.loadCart)
        }
    },
    Sf = {
        class: "cart-container"
    },
    xf = {
        key: 0
    },
    Cf = {
        class: "cart-grid"
    },
    Ef = ["src"],
    Rf = {
        class: "cart-info"
    },
    Pf = {
        class: "quantity-controls"
    },
    Tf = ["onClick"],
    Af = ["onClick"],
    If = {
        class: "item-total"
    },
    Of = ["onClick"],
    Mf = {
        class: "cart-actions"
    },
    Lf = {
        class: "total"
    },
    Nf = {
        key: 1,
        class: "empty-message"
    },
    $f = {
        key: 0,
        class: "popup-overlay"
    },
    Df = {
        class: "popup"
    },
    Ff = {
        class: "form-group"
    },
    jf = {
        class: "form-group"
    },
    kf = {
        class: "form-group"
    },
    Hf = {
        class: "form-group"
    },
    Vf = ["value"],
    Bf = {
        class: "form-group"
    },
    Uf = {
        key: 0,
        class: "form-group"
    },
    Kf = {
        key: 1,
        class: "form-group"
    },
    Wf = {
        class: "delivery-cost"
    },
    qf = {
        class: "total-with-delivery"
    },
    Gf = {
        class: "popup-actions"
    };

function zf(e, t, n, s, r, i) {
    return ce(), ae("div", Sf, [t[21] || (t[21] = w("h2", null, "🛒 Кошик", -1)), r.cart.length > 0 ? (ce(), ae("div", xf, [w("div", Cf, [(ce(!0), ae(ye, null, Kt(r.cart, o => (ce(), ae("div", {
        key: o.id,
        class: "cart-card"
    }, [w("img", {
        src: o.image,
        alt: "",
        class: "cart-image"
    }, null, 8, Ef), w("div", Rf, [w("h3", null, fe(o.name), 1), w("p", null, "Ціна за одиницю: " + fe(o.price) + " грн", 1), w("p", null, "Вага: " + fe(o.weight) + " кг", 1), w("div", Pf, [w("button", {
        onClick: l => i.decrease(o)
    }, "-", 8, Tf), w("span", null, fe(o.quantity), 1), w("button", {
        onClick: l => i.increase(o)
    }, "+", 8, Af)]), w("p", If, "Сума: " + fe(o.price * o.quantity) + " грн", 1), w("button", {
        class: "btn-delete",
        onClick: l => i.remove(o)
    }, "Видалити", 8, Of)])]))), 128))]), w("div", Mf, [w("p", Lf, "Всього: " + fe(i.totalSum) + " грн", 1), w("button", {
        class: "btn-checkout",
        onClick: t[0] || (t[0] = o => r.showPopup = !0)
    }, "Оформити замовлення"), w("button", {
        class: "btn-clear",
        onClick: t[1] || (t[1] = (...o) => i.clearCart && i.clearCart(...o))
    }, "Очистити кошик")])])) : (ce(), ae("p", Nf, "Кошик порожній 😔")), ue(Kc, {
        name: "popup"
    }, {
        default: vt(() => [r.showPopup ? (ce(), ae("div", $f, [w("div", Df, [t[20] || (t[20] = w("h3", null, "Оформлення замовлення", -1)), w("form", {
            onSubmit: t[10] || (t[10] = va((...o) => i.submitOrder && i.submitOrder(...o), ["prevent"]))
        }, [w("div", Ff, [t[11] || (t[11] = w("label", null, "Ім'я:", -1)), je(w("input", {
            "onUpdate:modelValue": t[2] || (t[2] = o => r.form.firstName = o),
            required: ""
        }, null, 512), [
            [lt, r.form.firstName]
        ])]), w("div", jf, [t[12] || (t[12] = w("label", null, "Прізвище:", -1)), je(w("input", {
            "onUpdate:modelValue": t[3] || (t[3] = o => r.form.lastName = o),
            required: ""
        }, null, 512), [
            [lt, r.form.lastName]
        ])]), w("div", kf, [t[13] || (t[13] = w("label", null, "Номер телефону:", -1)), je(w("input", {
            "onUpdate:modelValue": t[4] || (t[4] = o => r.form.phone = o),
            type: "tel",
            required: ""
        }, null, 512), [
            [lt, r.form.phone]
        ])]), w("div", Hf, [t[14] || (t[14] = w("label", null, "Місто:", -1)), je(w("select", {
            "onUpdate:modelValue": t[5] || (t[5] = o => r.form.city = o),
            required: ""
        }, [(ce(!0), ae(ye, null, Kt(r.cities, o => (ce(), ae("option", {
            key: o.name,
            value: o
        }, fe(o.name), 9, Vf))), 128))], 512), [
            [Wr, r.form.city]
        ])]), w("div", Bf, [t[16] || (t[16] = w("label", null, "Тип доставки:", -1)), je(w("select", {
            "onUpdate:modelValue": t[6] || (t[6] = o => r.form.deliveryType = o),
            required: ""
        }, [...t[15] || (t[15] = [w("option", {
            value: "courier"
        }, "Кур’єр", -1), w("option", {
            value: "nova"
        }, "Нова пошта", -1), w("option", {
            value: "ukr"
        }, "Укрпошта", -1)])], 512), [
            [Wr, r.form.deliveryType]
        ])]), r.form.deliveryType === "courier" ? (ce(), ae("div", Uf, [t[17] || (t[17] = w("label", null, "Адреса:", -1)), je(w("input", {
            "onUpdate:modelValue": t[7] || (t[7] = o => r.form.address = o),
            required: ""
        }, null, 512), [
            [lt, r.form.address]
        ])])) : Nn("", !0), r.form.deliveryType === "nova" || r.form.deliveryType === "ukr" ? (ce(), ae("div", Kf, [t[18] || (t[18] = w("label", null, "Номер відділення:", -1)), je(w("input", {
            "onUpdate:modelValue": t[8] || (t[8] = o => r.form.office = o),
            type: "number",
            min: "1",
            required: ""
        }, null, 512), [
            [lt, r.form.office]
        ])])) : Nn("", !0), w("p", Wf, "Вартість доставки: " + fe(i.deliveryCost) + " грн", 1), w("p", qf, "Разом з доставкою: " + fe(i.totalWithDelivery) + " грн", 1), w("div", Gf, [t[19] || (t[19] = w("button", {
            type: "submit",
            class: "btn-checkout"
        }, "Оформити", -1)), w("button", {
            type: "button",
            class: "btn-clear",
            onClick: t[9] || (t[9] = o => r.showPopup = !1)
        }, "Відмінити")])], 32)])])) : Nn("", !0)]),
        _: 1
    })])
}
const Jf = Ot(wf, [
        ["render", zf],
        ["__scopeId", "data-v-85289a37"]
    ]),
    Qf = {
        name: "About"
    },
    Yf = {
        class: "about-page"
    };

function Xf(e, t, n, s, r, i) {
    return ce(), ae("div", Yf, [...t[0] || (t[0] = [Tc('<h1 data-v-aeeb0656>Про проект</h1><section class="project-info" data-v-aeeb0656><h2 data-v-aeeb0656>Мета проекту</h2><p data-v-aeeb0656> Цей проект є студентською роботою, виконаною Зимовець Оленою, група 5-9з. Метою проекту є створення веб-додатку для демонстрації інтернет-магазину з категоріями товарів, кошиком, фільтрацією та розрахунком доставки. </p></section><section class="author-info" data-v-aeeb0656><h2 data-v-aeeb0656>Про авторку</h2><p data-v-aeeb0656> Зимовець Олена – студентка групи 5-9з. Цей проект є частиною навчальної практики та демонструє вміння працювати з javascript компонентами, анімаціями та динамічним станом додатку. </p><p data-v-aeeb0656> В проекті використані сучасні підходи до фронтенду: компоненти, локальний стан, взаємодія через localStorage та адаптивний дизайн. </p></section><section class="contact-info" data-v-aeeb0656><h2 data-v-aeeb0656>Контакти</h2><p data-v-aeeb0656>Електронна пошта: <a href="Ladyluck4420@icloud.com" data-v-aeeb0656>Ladyluck4420@icloud.com</a></p><p data-v-aeeb0656>Група: 5-9з</p></section>', 4)])])
}
const Zf = Ot(Qf, [
    ["render", Xf],
    ["__scopeId", "data-v-aeeb0656"]
]);
let ed = Wu({
        history: bu(),
        routes: [{
            path: "/",
            component: sf
        }, {
            path: "/category/:id",
            name: "Category",
            component: bf,
            props: !0
        }, {
            path: "/cart",
            component: Jf
        }, {
            path: "/about",
            component: Zf
        }]
    }),
    Bo = wa(Ba);
Bo.use(ed);
Bo.mount("#app");
//# sourceMappingURL=index-CEhpyszD.js.map