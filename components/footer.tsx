export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AT</span>
              </div>
              <span className="font-bold text-lg text-foreground">AITech</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionizing technology with AI-powered electronics and smart solutions
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/#ai-products" className="hover:text-accent transition">
                  Smart Home
                </a>
              </li>
              <li>
                <a href="/#smartphones" className="hover:text-accent transition">
                  Smartphones
                </a>
              </li>
              <li>
                <a href="/#ai-wearables" className="hover:text-accent transition">
                  Wearables
                </a>
              </li>
              <li>
                <a href="/#ai-accessories" className="hover:text-accent transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-accent transition">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 AITech. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition">
                Terms
              </a>
              <a href="#" className="hover:text-accent transition">
                Privacy
              </a>
              <a href="#" className="hover:text-accent transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
