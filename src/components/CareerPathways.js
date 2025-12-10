window.CareerPathways = function () {
    const fields = Object.keys(window.careerData).filter(key => key !== 'freelancing');

    return `
    <section id="careers" style="padding: var(--spacing-2xl) 0; position: relative;">
        <!-- Background decoration -->
        <div style="position: absolute; top: 10%; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 0;">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,20 Q50,0 100,20" fill="none" stroke="var(--color-accent-teal)" stroke-width="0.2" stroke-dasharray="5,5" opacity="0.3" />
                <path d="M0,80 Q50,100 100,80" fill="none" stroke="var(--color-accent-coral)" stroke-width="0.2" stroke-dasharray="5,5" opacity="0.3" />
            </svg>
        </div>

        <div class="container" style="position: relative; z-index: 1;">
            <div class="text-center mb-16 animate-fade-up">
              <span class="handwritten" style="font-size: 1.8rem; color: var(--color-accent-coral); display: block; margin-bottom: var(--spacing-xs);">
                Choose your field
              </span>
              <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: var(--spacing-sm); color: var(--color-ink); letter-spacing: -0.02em;">
                Explore Career Paths
              </h2>
              <p style="font-size: 1.2rem; color: var(--color-ink-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                Discover opportunities in Medical, Computer Science, and Engineering fields with our comprehensive guides.
              </p>
            </div>

            <div class="grid gap-lg" style="grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
                ${fields.map((fieldId, index) => {
        const field = window.careerData[fieldId];
        const colors = ['var(--color-accent-coral)', 'var(--color-accent-teal)', 'var(--color-accent-lavender)'];
        const color = colors[index % colors.length];
        const delay = index * 150;
        const rotation = index % 2 === 0 ? -2 : 2;

        return `
                    <div class="paper-card animate-drop" style="animation-delay: ${delay}ms; cursor: pointer; min-height: 320px; display: flex; flex-direction: column; justify-content: space-between; transform: rotate(${rotation}deg); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);" 
                         onclick="window.location.hash = 'field/${fieldId}'"
                         onmouseover="this.style.transform='translateY(-12px) rotate(0deg) scale(1.02)'; this.style.zIndex='10';"
                         onmouseout="this.style.transform='rotate(${rotation}deg) translateY(0) scale(1)'; this.style.zIndex='1';">
                        
                        <div class="paperclip" style="right: auto; left: 20px; transform: rotate(-5deg);"></div>
                        <div class="tape" style="top: auto; bottom: -15px; left: 50%; transform: translateX(-50%) rotate(1deg); width: 100px;"></div>
                        
                        <div>
                            <div style="width: 70px; height: 70px; background: ${color}; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: var(--spacing-md); box-shadow: var(--shadow-sm); transform: rotate(-3deg); border: 2px solid white;">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                </svg>
                            </div>
                            
                            <h3 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; margin-bottom: var(--spacing-xs); color: var(--color-ink); line-height: 1.1;">${field.title}</h3>
                            <div style="width: 60px; height: 6px; background: ${color}; border-radius: 3px; margin-bottom: var(--spacing-md); opacity: 0.5;"></div>
                        </div>

                        <div class="flex justify-between items-end" style="border-top: 2px dashed rgba(0,0,0,0.05); padding-top: var(--spacing-md);">
                            <span class="handwritten" style="color: var(--color-ink-light); font-size: 1.1rem;">
                                ${field.careers.length} career paths
                            </span>
                            <div style="width: 44px; height: 44px; background: ${color}; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: transform 0.3s; box-shadow: var(--shadow-sm);">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>
                    `;
    }).join('')}
            </div>
        </div>
    </section>
    `;
}
