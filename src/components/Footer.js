window.Footer = function () {
  return `
    <footer style="background: var(--color-ink); color: white; padding: var(--spacing-2xl) 0 var(--spacing-xl); position: relative; margin-top: var(--spacing-2xl);">
        <div class="torn-edge-top" style="top: -10px; transform: rotate(180deg); background-image: url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 20' preserveAspectRatio='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 L0 0 L5 5 L10 0 L15 5 L20 0 L25 5 L30 0 L35 5 L40 0 L45 5 L50 0 L55 5 L60 0 L65 5 L70 0 L75 5 L80 0 L85 5 L90 0 L95 5 L100 0 L100 20 Z' fill='%231e1e24'/%3E%3C/svg%3E\");"></div>
        
        <div class="container">
            <div class="grid gap-lg" style="grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); margin-bottom: var(--spacing-xl);">
                
                <div>
                    <div class="flex items-center gap-sm mb-6">
                        <div style="width: 40px; height: 40px; background: var(--color-accent-coral); border-radius: 8px; display: flex; align-items: center; justify-content: center; transform: rotate(-3deg);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                            </svg>
                        </div>
                        <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.5rem;">Next Step</span>
                    </div>
                    <p style="color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: var(--spacing-md);">
                        Empowering students to make informed career decisions and achieve their dreams.
                    </p>
                </div>

                <div>
                    <h4 style="font-family: var(--font-display); font-weight: 700; font-size: 1.2rem; margin-bottom: var(--spacing-md); color: var(--color-accent-mustard);">Quick Links</h4>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                        <li><a href="#" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'">Home</a></li>
                        <li><a href="#careers" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'">Careers</a></li>
                        <li><a href="#freelancing" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'">Freelancing</a></li>
                        <li><a href="#about" style="color: rgba(255,255,255,0.8); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='white'">About Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style="font-family: var(--font-display); font-weight: 700; font-size: 1.2rem; margin-bottom: var(--spacing-md); color: var(--color-accent-teal);">Contact</h4>
                    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                        <li style="display: flex; gap: 0.75rem; align-items: center; color: rgba(255,255,255,0.8);">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            info@nextstep.com
                        </li>
                        <li style="display: flex; gap: 0.75rem; align-items: center; color: rgba(255,255,255,0.8);">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            +92 300 1234567
                        </li>
                    </ul>
                </div>

            </div>

            <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: var(--spacing-lg); text-align: center; color: rgba(255,255,255,0.5); font-size: 0.9rem;">
                <p>&copy; 2024 Next Step. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
}
