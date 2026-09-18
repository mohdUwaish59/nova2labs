"""
Generates the 3D isometric service icons in public/icons/services/.

Every icon shares one rig: a glass platform, the same key light from the top
left, soft coloured contact shadows and a specular edge on each top face. Each
discipline gets its own hue so the set reads as a family with distinct members.

    python scripts/service-icons.py
"""
import math
import os

OUT = "public/icons/services"
S = 49            # iso unit in px
CX, CY = 128, 146  # platform centre on the 256 canvas
C30, S30 = math.cos(math.pi / 6), 0.5

PALETTES = {
    #            top        mid        dark       deep       glow
    "cyan":    ("#b6f6ff", "#22d3ee", "#0e7490", "#0b3a4a", "#22d3ee"),
    "violet":  ("#e4dcff", "#a78bfa", "#6d28d9", "#3b1a78", "#8b5cf6"),
    "blue":    ("#cfe2ff", "#60a5fa", "#1d4ed8", "#172a6b", "#3b82f6"),
    "emerald": ("#b8f5da", "#34d399", "#047857", "#063d2f", "#10b981"),
    "teal":    ("#aef7ea", "#2dd4bf", "#0f766e", "#0c3b38", "#14b8a6"),
    "amber":   ("#ffe9a6", "#fbbf24", "#b45309", "#5c2c07", "#f59e0b"),
    "pink":    ("#ffd6ec", "#f472b6", "#be185d", "#5e1034", "#ec4899"),
}


def P(x, y, z):
    return (CX + (x - y) * C30 * S, CY + (x + y) * S30 * S - z * S)


def pts(*ps):
    return " ".join(f"{a:.1f},{b:.1f}" for a, b in ps)


class Scene:
    def __init__(self, uid, hue, mode):
        self.uid, self.hue, self.mode = uid, hue, mode
        self.defs, self.body, self.n = [], [], 0
        top, mid, dark, deep, glow = PALETTES[hue]
        self.top, self.mid, self.dark, self.deep, self.glow = top, mid, dark, deep, glow
        self.grad("top", top, mid, "0", "0", "1", "1")
        self.grad("left", mid, dark, "0", "0", "0", "1")
        self.grad("right", dark, deep, "0", "0", "0", "1")
        self.grad("spec", "#ffffff", "#ffffff", "0", "0", "1", "1", 0.55, 0)
        if mode == "dark":
            self.grad("ptop", "#f1f5f9", "#cbd5e1", "0", "0", "1", "1", 0.16, 0.06)
            self.grad("pleft", "#94a3b8", "#475569", "0", "0", "0", "1", 0.35, 0.2)
            self.grad("pright", "#64748b", "#1e293b", "0", "0", "0", "1", 0.4, 0.25)
        else:
            self.grad("ptop", "#ffffff", "#e2e8f0", "0", "0", "1", "1", 1, 1)
            self.grad("pleft", "#cbd5e1", "#94a3b8", "0", "0", "0", "1", 1, 1)
            self.grad("pright", "#94a3b8", "#64748b", "0", "0", "0", "1", 1, 1)
        self.defs.append(
            f'<radialGradient id="{uid}-halo" cx=".5" cy=".5" r=".5">'
            f'<stop offset="0" stop-color="{glow}" stop-opacity="{0.34 if mode == "dark" else 0.22}"/>'
            f'<stop offset="1" stop-color="{glow}" stop-opacity="0"/></radialGradient>'
        )
        self.defs.append(
            f'<radialGradient id="{uid}-orb" cx=".35" cy=".3" r=".75">'
            f'<stop offset="0" stop-color="#ffffff"/><stop offset=".35" stop-color="{top}"/>'
            f'<stop offset=".75" stop-color="{mid}"/><stop offset="1" stop-color="{dark}"/></radialGradient>'
        )
        self.defs.append(
            f'<filter id="{uid}-blur" x="-50%" y="-50%" width="200%" height="200%">'
            f'<feGaussianBlur stdDeviation="6"/></filter>'
        )
        self.defs.append(
            f'<filter id="{uid}-soft" x="-50%" y="-50%" width="200%" height="200%">'
            f'<feGaussianBlur stdDeviation="2.2"/></filter>'
        )

    def grad(self, name, a, b, x1, y1, x2, y2, oa=1, ob=1):
        self.defs.append(
            f'<linearGradient id="{self.uid}-{name}" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}">'
            f'<stop offset="0" stop-color="{a}" stop-opacity="{oa}"/>'
            f'<stop offset="1" stop-color="{b}" stop-opacity="{ob}"/></linearGradient>'
        )

    def add(self, s):
        self.body.append(s)

    # ── primitives ──────────────────────────────────────────────────────────
    def box(self, x, y, z, dx, dy, dz, kind="obj", spec=True):
        t, l, r = (f"url(#{self.uid}-top)", f"url(#{self.uid}-left)", f"url(#{self.uid}-right)")
        if kind == "plat":
            t, l, r = (f"url(#{self.uid}-ptop)", f"url(#{self.uid}-pleft)", f"url(#{self.uid}-pright)")
        z1 = z + dz
        top = pts(P(x, y, z1), P(x + dx, y, z1), P(x + dx, y + dy, z1), P(x, y + dy, z1))
        left = pts(P(x, y + dy, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z1), P(x, y + dy, z1))
        right = pts(P(x + dx, y, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z1), P(x + dx, y, z1))
        self.add(f'<polygon points="{left}" fill="{l}"/>')
        self.add(f'<polygon points="{right}" fill="{r}"/>')
        self.add(f'<polygon points="{top}" fill="{t}"/>')
        # specular rim along the two front top edges
        if spec:
            a, b, c = P(x, y + dy, z1), P(x + dx, y + dy, z1), P(x + dx, y, z1)
            op = 0.9 if kind == "obj" else 0.5
            self.add(
                f'<polyline points="{pts(a, b, c)}" fill="none" stroke="#ffffff" '
                f'stroke-opacity="{op}" stroke-width="1.4" stroke-linejoin="round"/>'
            )

    def shadow(self, x, y, rx, ry, op=0.45):
        cx, cy = P(x, y, 0)
        self.add(
            f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{rx}" ry="{ry}" fill="{self.dark}" '
            f'opacity="{op}" filter="url(#{self.uid}-soft)"/>'
        )

    def orb(self, x, y, z, r, glow=True):
        cx, cy = P(x, y, z)
        if glow:
            self.add(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r * 1.9:.1f}" fill="{self.glow}" '
                     f'opacity=".35" filter="url(#{self.uid}-blur)"/>')
        self.add(f'<circle cx="{cx:.1f}" cy="{cy:.1f}" r="{r:.1f}" fill="url(#{self.uid}-orb)"/>')
        self.add(f'<ellipse cx="{cx - r * .32:.1f}" cy="{cy - r * .38:.1f}" rx="{r * .32:.1f}" '
                 f'ry="{r * .18:.1f}" fill="#fff" opacity=".85" transform="rotate(-30 {cx - r * .32:.1f} {cy - r * .38:.1f})"/>')

    def ring(self, x, y, z, R, w=2.2, op=0.8, dash=None):
        cx, cy = P(x, y, z)
        d = f' stroke-dasharray="{dash}"' if dash else ""
        self.add(f'<ellipse cx="{cx:.1f}" cy="{cy:.1f}" rx="{1.2247 * R * S:.1f}" ry="{0.7071 * R * S:.1f}" '
                 f'fill="none" stroke="{self.mid}" stroke-width="{w}" opacity="{op}"{d}/>')

    def glyph(self, x, y, z, text, size=0.62, color="#ffffff", weight=700):
        # text laid flat on the top plane of an iso object
        X, Y = P(x, y, z)
        k = S * size / 16
        self.add(
            f'<text transform="matrix({C30 * k:.3f},{S30 * k:.3f},{-C30 * k:.3f},{S30 * k:.3f},{X:.1f},{Y:.1f})" '
            f'font-family="Geist, Inter, Arial, sans-serif" font-size="16" font-weight="{weight}" '
            f'text-anchor="middle" dominant-baseline="middle" fill="{color}">{text}</text>'
        )

    def platform(self):
        hx, hy = P(0, 0, 0)
        self.add(f'<ellipse cx="{CX}" cy="{hy + 30:.1f}" rx="124" ry="54" fill="url(#{self.uid}-halo)"/>')
        self.box(-1.05, -1.05, -0.22, 2.1, 2.1, 0.22, kind="plat")
        # coloured rim light on the platform's front edges
        a, b, c = P(-1.05, 1.05, 0), P(1.05, 1.05, 0), P(1.05, -1.05, 0)
        self.add(f'<polyline points="{pts(a, b, c)}" fill="none" stroke="{self.glow}" '
                 f'stroke-width="1.6" stroke-opacity=".75" stroke-linejoin="round"/>')

    def svg(self):
        return (
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" fill="none">'
            f'<defs>{"".join(self.defs)}</defs>{"".join(self.body)}</svg>\n'
        )


# ── the seven icons ─────────────────────────────────────────────────────────
def ai_agents(s):
    s.platform()
    s.shadow(0, 0, 44, 18)
    s.ring(0, 0, 0.9, 1.15, w=1.6, op=.55, dash="4 5")
    s.box(-0.5, -0.5, 0, 1.0, 1.0, 1.0)
    # eye on the front-left face
    ex, ey = P(0.0, 0.5, 0.55)
    s.add(f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="11" fill="{s.deep}"/>')
    s.add(f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="6.5" fill="#fff"/>')
    s.add(f'<circle cx="{ex:.1f}" cy="{ey:.1f}" r="16" fill="{s.glow}" opacity=".35" filter="url(#{s.uid}-soft)"/>')
    # tools orbiting at different heights
    for (x, y, z, r) in [(-0.95, 0.35, 1.35, 7.5), (0.85, -0.85, 1.55, 6), (0.95, 0.75, 0.85, 5.5)]:
        s.orb(x, y, z, r)


def llm_nlp(s):
    s.platform()
    s.shadow(0, 0, 50, 20)
    for i, z in enumerate([0, 0.26, 0.52]):
        off = i * 0.12
        s.box(-0.72 + off, -0.6 - off, z, 1.4, 1.2, 0.18)
    # text lines on the top page
    z = 0.70
    for j, w in enumerate([1.0, 0.75, 0.9]):
        a = P(-0.35, -0.72 + j * 0.28, z)
        b = P(-0.35 + w, -0.72 + j * 0.28, z)
        s.add(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" '
              f'stroke="{s.deep}" stroke-width="3.2" stroke-linecap="round" opacity=".55"/>')
    s.orb(0.7, -1.0, 1.35, 9)


def full_stack(s):
    s.platform()
    s.shadow(0, 0, 50, 20)
    s.box(-0.75, -0.75, 0.0, 1.5, 1.5, 0.3)
    s.box(-0.75, -0.75, 0.48, 1.5, 1.5, 0.3)
    s.box(-0.75, -0.75, 0.96, 1.5, 1.5, 0.3)
    s.glyph(0, 0, 1.27, "&lt;/&gt;", size=0.9, color=s.deep, weight=800)


def devops(s):
    s.platform()
    s.shadow(0.1, 0.1, 54, 21)
    s.box(-0.85, 0.15, 0, 0.6, 0.6, 0.45)
    s.box(-0.25, -0.2, 0, 0.6, 0.6, 0.85)
    s.box(0.35, -0.55, 0, 0.6, 0.6, 1.3)
    # arrow on the tallest block's top
    x, y, z = 0.65, -0.25, 1.3
    tip, l, r = P(x - 0.2, y - 0.2, z), P(x + 0.12, y - 0.02, z), P(x - 0.02, y + 0.12, z)
    s.add(f'<polygon points="{pts(tip, l, r)}" fill="#fff"/>')
    a, b = P(x - 0.06, y - 0.06, z), P(x + 0.18, y + 0.18, z)
    s.add(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" '
          f'stroke="#fff" stroke-width="4" stroke-linecap="round"/>')
    s.orb(-0.9, -0.85, 1.25, 6)


def networking(s):
    s.platform()
    nodes = [(-0.7, 0.55), (0.7, 0.6), (0.65, -0.7)]
    hub = (0, 0, 1.25)
    hx, hy = P(*hub)
    for (x, y) in nodes:
        nx, ny = P(x, y, 0.28)
        s.add(f'<line x1="{hx:.1f}" y1="{hy:.1f}" x2="{nx:.1f}" y2="{ny:.1f}" stroke="{s.mid}" '
              f'stroke-width="2.4" opacity=".75"/>')
    for (x, y) in nodes:
        s.shadow(x + 0.1, y + 0.1, 12, 5, .35)
        s.box(x - 0.14, y - 0.14, 0, 0.28, 0.28, 0.28)
    s.shadow(0.15, 0.15, 30, 12, .4)
    s.orb(*hub, 26)
    # meridians on the globe
    s.add(f'<ellipse cx="{hx:.1f}" cy="{hy:.1f}" rx="26" ry="9" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.6"/>')
    s.add(f'<ellipse cx="{hx:.1f}" cy="{hy:.1f}" rx="10" ry="26" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="1.6"/>')


def it_infrastructure(s):
    s.platform()
    s.shadow(0.05, 0.05, 46, 18)
    s.box(-0.55, -0.35, 0, 0.7, 0.7, 1.75)
    s.box(0.3, -0.7, 0, 0.55, 0.55, 1.15)
    # drive bays + LEDs on the tall tower's front-left face
    for k in range(6):
        z = 0.25 + k * 0.25
        a, b = P(-0.45, 0.35, z), P(0.0, 0.35, z)
        s.add(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" '
              f'stroke="{s.deep}" stroke-width="3" stroke-linecap="round" opacity=".5"/>')
        lx, ly = P(0.07, 0.35, z)
        col = "#fff" if k % 2 == 0 else s.top
        s.add(f'<circle cx="{lx:.1f}" cy="{ly:.1f}" r="2.4" fill="{col}"/>')
    for k in range(4):
        z = 0.25 + k * 0.24
        a, b = P(0.85, -0.6, z), P(0.85, -0.25, z)
        s.add(f'<line x1="{a[0]:.1f}" y1="{a[1]:.1f}" x2="{b[0]:.1f}" y2="{b[1]:.1f}" '
              f'stroke="{s.deep}" stroke-width="2.6" stroke-linecap="round" opacity=".55"/>')


def graphic_design(s):
    s.platform()
    s.shadow(0, 0, 52, 20)
    # swatch fan: three tiles, fanned in height
    for i, z in enumerate([0.0, 0.2, 0.4]):
        s.box(-0.85 + i * 0.12, 0.05 - i * 0.12, z, 0.9, 0.6, 0.14)
    # design primitives: cube, sphere, cone
    s.box(0.25, -0.85, 0, 0.55, 0.55, 0.55)
    s.orb(-0.55, -0.55, 0.95, 16)
    bx, by = P(0.55, 0.55, 0)
    tx, ty = P(0.55, 0.55, 1.2)
    s.add(f'<ellipse cx="{bx:.1f}" cy="{by:.1f}" rx="20" ry="11" fill="{s.dark}"/>')
    s.add(f'<polygon points="{tx:.1f},{ty:.1f} {bx - 20:.1f},{by:.1f} {bx + 20:.1f},{by:.1f}" '
          f'fill="url(#{s.uid}-left)"/>')
    s.add(f'<polygon points="{tx:.1f},{ty:.1f} {bx:.1f},{by + 11:.1f} {bx + 20:.1f},{by:.1f}" '
          f'fill="url(#{s.uid}-right)" opacity=".85"/>')


ICONS = {
    "ai-agents": ("cyan", ai_agents),
    "llm-nlp": ("violet", llm_nlp),
    "full-stack": ("blue", full_stack),
    "devops": ("emerald", devops),
    "networking": ("teal", networking),
    "it-infrastructure": ("amber", it_infrastructure),
    "graphic-design": ("pink", graphic_design),
}

if __name__ == "__main__":
    for slug, (hue, draw) in ICONS.items():
        for mode, suffix in (("dark", ""), ("light", "-light")):
            sc = Scene(f"{slug[:3]}{mode[0]}", hue, mode)
            draw(sc)
            with open(os.path.join(OUT, f"{slug}{suffix}.svg"), "w", encoding="utf-8", newline="\n") as f:
                f.write(sc.svg())
    print("wrote", len(ICONS) * 2, "icons")
