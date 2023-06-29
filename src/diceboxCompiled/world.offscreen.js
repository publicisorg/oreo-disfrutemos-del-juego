var u = Object.defineProperty;
var J = (X, l, Z) => l in X ? u(X, l, { enumerable: !0, configurable: !0, writable: !0, value: Z }) : X[l] = Z;
var d = (X, l, Z) => (J(X, typeof l != "symbol" ? l + "" : l, Z), Z), R = (X, l, Z) => {
  if (!l.has(X))
    throw TypeError("Cannot " + Z);
};
var V = (X, l, Z) => (R(X, l, "read from private field"), Z ? Z.call(X) : l.get(X)), m = (X, l, Z) => {
  if (l.has(X))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(X) : l.set(X, Z);
}, h = (X, l, Z, c) => (R(X, l, "write to private field"), c ? c.call(X, Z) : l.set(X, Z), Z);
var a = (X, l, Z) => (R(X, l, "access private method"), Z);
function N() {
  let X;
  try {
    if (X = y && (window.URL || window.webkitURL).createObjectURL(y), !X)
      throw "";
    return new Worker(X);
  } catch {
    return new Worker("data:application/javascript;base64," + p);
  } finally {
    X && (window.URL || window.webkitURL).revokeObjectURL(X);
  }
}
var b, G, W, Y;
class U {
  // roll group callback
  constructor(l) {
    // initialize the babylon scene
    m(this, W);
    d(this, "initialized", !1);
    d(this, "offscreenWorkerInit", !1);
    d(this, "themeLoadedInit", !1);
    d(this, "pendingThemePromises", {});
    m(this, b, void 0);
    m(this, G, void 0);
    // onInitComplete = () => {} // init callback
    d(this, "onRollResult", () => {
    });
    // individual die callback
    d(this, "onRollComplete", () => {
    });
    this.onInitComplete = l.onInitComplete, h(this, b, l.canvas.transferControlToOffscreen()), h(this, G, new N()), V(this, G).init = new Promise((Z, c) => {
      this.offscreenWorkerInit = Z;
    }), this.initialized = a(this, W, Y).call(this, l);
  }
  connect(l) {
    V(this, G).postMessage({
      action: "connect",
      port: l
    }, [l]);
  }
  updateConfig(l) {
    V(this, G).postMessage({ action: "updateConfig", options: l });
  }
  resize(l) {
    V(this, G).postMessage({ action: "resize", options: l });
  }
  async loadTheme(l) {
    return new Promise((Z, c) => {
      if (Object.keys(this.pendingThemePromises).includes(l.theme))
        return Z();
      this.pendingThemePromises[l.theme] = Z, V(this, G).postMessage({ action: "loadTheme", options: l });
    }).catch((Z) => console.error(Z));
  }
  clear() {
    V(this, G).postMessage({ action: "clearDice" });
  }
  add(l) {
    V(this, G).postMessage({ action: "addDie", options: l });
  }
  addNonDie(l) {
    V(this, G).postMessage({ action: "addNonDie", options: l });
  }
  remove(l) {
    V(this, G).postMessage({ action: "removeDie", options: l });
  }
}
b = new WeakMap(), G = new WeakMap(), W = new WeakSet(), Y = async function(l) {
  return V(this, G).postMessage({
    action: "init",
    canvas: V(this, b),
    width: l.canvas.clientWidth,
    height: l.canvas.clientHeight,
    options: l.options
  }, [V(this, b)]), V(this, G).onmessage = (Z) => {
    switch (Z.data.action) {
      case "init-complete":
        this.offscreenWorkerInit();
        break;
      case "connect-complete":
        break;
      case "theme-loaded":
        Z.data.id && this.pendingThemePromises[Z.data.id](Z.data.id);
        break;
      case "roll-result":
        this.onRollResult(Z.data.die);
        break;
      case "roll-complete":
        this.onRollComplete();
        break;
      case "die-removed":
        this.onDieRemoved(Z.data.rollId);
        break;
    }
  }, await V(this, G).init, this.onInitComplete(!0), !0;
};
export {
  U as default
};
//# sourceMappingURL=world.offscreen.js.map