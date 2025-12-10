window.Hero = function () {
  return `
    <section class="container" style="min-height: 90vh; display: flex; align-items: center; padding: var(--spacing-xl) 0; position: relative; overflow: hidden;">
      
      <!-- Parallax Background Elements -->
      <div class="parallax" data-speed="20" style="position: absolute; top: 10%; right: 5%; width: 150px; height: 150px; background: var(--color-accent-mustard); border-radius: 50%; opacity: 0.15; filter: blur(40px); z-index: 0;"></div>
      <div class="parallax" data-speed="-15" style="position: absolute; bottom: 15%; left: 0%; width: 200px; height: 200px; background: var(--color-accent-teal); border-radius: 50%; opacity: 0.15; filter: blur(50px); z-index: 0;"></div>
      <div class="parallax" data-speed="10" style="position: absolute; top: 40%; right: 30%; width: 80px; height: 80px; background: var(--color-accent-lavender); border-radius: 50%; opacity: 0.2; filter: blur(30px); z-index: 0;"></div>

      <div class="grid gap-lg items-center" style="grid-template-columns: 1fr 1fr; width: 100%; position: relative; z-index: 1;">
        
        <!-- Text Content -->
        <div class="animate-fade-up" style="position: relative;">
          
          <!-- Decorative Arrow -->
          <div style="position: absolute; top: -40px; left: -60px; transform: rotate(-15deg);">
             <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--color-accent-coral)" stroke-width="2" stroke-dasharray="5,5">
               <path d="M10,90 Q30,10 90,10" />
               <path d="M80,5 L90,10 L85,20" />
             </svg>
          </div>

          <div style="display: inline-block; padding: 0.5rem 1.25rem; background: var(--color-accent-mustard); border-radius: var(--radius-full); margin-bottom: var(--spacing-md); box-shadow: var(--shadow-sm); transform: rotate(-2deg); border: 1px solid rgba(0,0,0,0.05);">
            <span style="font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; color: var(--color-ink); display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-size: 1.2rem;">✨</span> Your Journey Starts Here
            </span>
          </div>
          
          <h1 style="font-family: var(--font-display); font-size: clamp(3.5rem, 7vw, 6rem); line-height: 1; font-weight: 800; margin-bottom: var(--spacing-md); color: var(--color-ink); letter-spacing: -0.02em;">
            Find Your <br>
            <span style="position: relative; display: inline-block; color: var(--color-accent-coral);">
              Perfect Path
              <svg class="animate-scale delay-500" style="position: absolute; bottom: -10px; left: 0; width: 100%; height: 15px; z-index: -1;" viewBox="0 0 200 20" preserveAspectRatio="none">
                <path d="M5,15 Q100,5 195,15" fill="none" stroke="var(--color-accent-mustard)" stroke-width="8" stroke-opacity="0.5" stroke-linecap="round" />
              </svg>
            </span>
          </h1>
          
          <p style="font-size: 1.25rem; color: var(--color-ink-light); margin-bottom: var(--spacing-lg); max-width: 550px; line-height: 1.7;">
            Discover your dream career, explore top universities, and master in-demand skills. We're here to guide you every step of the way with personalized insights.
          </p>
          
          <div class="flex gap-md items-center flex-wrap">
            <a href="#careers" class="btn btn-primary">Explore Careers</a>
            <a href="#freelancing" class="btn btn-secondary">Learn Skills</a>
          </div>

          <!-- Handwritten note -->
          <div class="handwritten animate-drop delay-500" style="margin-top: var(--spacing-lg); font-size: 1.3rem; color: var(--color-ink-light); display: flex; align-items: center; gap: 1rem;">
            <svg width="40" height="20" viewBox="0 0 60 30" fill="none" stroke="currentColor" stroke-width="2">
               <path d="M50,5 Q30,25 5,15" marker-end="url(#arrowhead)" />
            </svg>
            Over 1000+ students guided!
          </div>
        </div>

        <!-- Visual Content -->
        <div style="position: relative; height: 600px; display: flex; align-items: center; justify-content: center;">
          
          <!-- Floating Elements -->
          <div class="parallax" data-speed="-10" style="position: absolute; top: 0; right: 10%; z-index: 2;">
            <div class="paper-card animate-drop delay-300" style="padding: 1rem; transform: rotate(5deg); max-width: 180px;">
               <div style="width: 40px; height: 40px; background: var(--color-accent-teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; color: white;">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
               </div>
               <p style="font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; line-height: 1.2;">Top Universities</p>
            </div>
          </div>

          <div class="parallax" data-speed="15" style="position: absolute; bottom: 10%; left: 5%; z-index: 2;">
            <div class="paper-card animate-drop delay-400" style="padding: 1rem; transform: rotate(-5deg); max-width: 180px;">
               <div style="width: 40px; height: 40px; background: var(--color-accent-lavender); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; color: white;">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
               </div>
               <p style="font-family: var(--font-display); font-weight: 700; font-size: 0.9rem; line-height: 1.2;">In-Demand Skills</p>
            </div>
          </div>

          <!-- Main Card -->
          <div class="paper-card animate-drop delay-200" style="width: 100%; max-width: 480px; padding: var(--spacing-lg); text-align: center; transform: rotate(2deg); z-index: 1;">
            <div class="paperclip"></div>
            <div class="tape"></div>
            
            <div style="width: 140px; height: 140px; background: linear-gradient(135deg, var(--color-accent-coral), var(--color-accent-rose)); border-radius: 50%; margin: 0 auto var(--spacing-md); display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); position: relative;">
              <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
              </svg>
              <!-- Orbiting dot -->
              <div style="position: absolute; top: 0; left: 50%; width: 16px; height: 16px; background: var(--color-accent-mustard); border-radius: 50%; transform: translate(-50%, -50%); box-shadow: 0 2px 4px rgba(0,0,0,0.1);"></div>
            </div>
            
            <h3 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; margin-bottom: var(--spacing-sm); color: var(--color-ink);">Your Future</h3>
            <p style="color: var(--color-ink-light); margin-bottom: var(--spacing-md); font-size: 1.1rem;">Personalized career guidance for Medical, Engineering & Computer Science fields</p>
            
            <div class="flex justify-center gap-sm" style="flex-wrap: wrap;">
              <span style="padding: 0.5rem 1rem; background: var(--color-bg); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink); border: 1px solid rgba(0,0,0,0.05);">🏥 Medical</span>
              <span style="padding: 0.5rem 1rem; background: var(--color-bg); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink); border: 1px solid rgba(0,0,0,0.05);">💻 CS</span>
              <span style="padding: 0.5rem 1rem; background: var(--color-bg); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink); border: 1px solid rgba(0,0,0,0.05);">⚙️ Engineering</span>
            </div>
          </div>

          <!-- Stamp badge -->
          <div class="stamp animate-drop delay-500" style="position: absolute; top: 40px; right: 40px; z-index: 3;">
            <span style="line-height: 1.2;">Top<br>Rated</span>
          </div>
        </div>

      </div>
    </section>
    `;
}
