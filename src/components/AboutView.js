window.AboutView = function () {
    return `
    <section id="about" style="padding: var(--spacing-2xl) 0; position: relative;">
        <!-- Background doodles -->
        <div style="position: absolute; top: 20%; left: 5%; opacity: 0.1; transform: rotate(-10deg);">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="var(--color-ink)" stroke-width="2">
                <path d="M10,50 Q25,25 50,50 T90,50" />
                <path d="M10,60 Q25,35 50,60 T90,60" />
            </svg>
        </div>
        <div style="position: absolute; bottom: 10%; right: 5%; opacity: 0.1; transform: rotate(15deg);">
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="var(--color-ink)" stroke-width="2">
                <circle cx="50" cy="50" r="40" stroke-dasharray="5,5" />
            </svg>
        </div>

        <div class="container">
            <!-- Motive Section -->
            <div class="text-center mb-24 animate-fade-up">
                <div style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--color-accent-lavender); border-radius: var(--radius-full); margin-bottom: var(--spacing-md); box-shadow: var(--shadow-sm); transform: rotate(-1deg); border: 2px solid white;">
                    <span style="font-family: var(--font-display); font-weight: 700; color: white; letter-spacing: 0.05em;">OUR MISSION</span>
                </div>
                <h2 style="font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 800; line-height: 1.1; margin-bottom: var(--spacing-md); color: var(--color-ink); letter-spacing: -0.02em;">
                    Guiding Youth to <br> <span style="position: relative; color: var(--color-accent-coral); display: inline-block;">
                        Their Dreams
                        <svg style="position: absolute; bottom: -5px; left: 0; width: 100%; height: 10px;" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0,5 Q50,10 100,5" fill="none" stroke="var(--color-accent-mustard)" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </span>
                </h2>
                <p style="font-size: 1.3rem; color: var(--color-ink-light); max-width: 750px; margin: 0 auto; line-height: 1.7;">
                    We believe every student deserves a clear path to their future. Our platform provides personalized guidance to help you achieve your career goals with confidence.
                </p>
            </div>

            <!-- Team Section -->
            <div class="text-center">
                <span class="handwritten" style="font-size: 1.8rem; color: var(--color-accent-teal); display: block; margin-bottom: var(--spacing-sm);">
                    Meet the creators
                </span>
                <h2 style="font-family: var(--font-display); font-size: 3rem; font-weight: 800; margin-bottom: var(--spacing-xl); color: var(--color-ink);">The People Behind Next Step</h2>
                
                <div class="flex flex-col items-center gap-lg" style="margin-top: var(--spacing-xl);">
                    
                    <!-- Top Row: Lead Developer (Ali Shahid) -->
                    <div class="w-full flex justify-center">
                        <div class="animate-drop delay-200" style="position: relative; width: 100%; max-width: 400px;"> <!-- Increased max-width slightly for importance -->
                            <div class="paper-card" style="text-align: center; padding: var(--spacing-lg) var(--spacing-md); transform: rotate(-2deg); transition: transform 0.3s; z-index: 5;" onmouseover="this.style.transform='rotate(0deg) scale(1.05)'" onmouseout="this.style.transform='rotate(-2deg) scale(1)'">
                                <div class="paperclip" style="left: 20px; right: auto;"></div>
                                
                                <div style="width: 180px; height: 180px; margin: 0 auto var(--spacing-md); border-radius: 50%; overflow: hidden; border: 6px solid white; box-shadow: var(--shadow-md); position: relative;"> <!-- Larger image -->
                                    <img src="assets/alim.jpg" alt="Ali Shahid" style="width: 100%; height: 100%; object-fit: cover;">
                                    <div style="position: absolute; inset: 0; border-radius: 50%; border: 4px solid var(--color-accent-coral); opacity: 0.5;"></div>
                                </div>
                                
                                <h3 style="font-family: var(--font-display); font-size: 2.2rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--color-ink);">Ali Shahid</h3>
                                <p style="font-family: var(--font-display); color: var(--color-accent-coral); font-weight: 700; font-size: 1.2rem; margin-bottom: var(--spacing-md); text-transform: uppercase; letter-spacing: 0.05em;">Lead Developer</p>
                                
                                <p style="color: var(--color-ink-light); line-height: 1.6; margin-bottom: var(--spacing-md); font-size: 1.1rem;">
                                    Passionate about building scalable solutions and empowering the next generation of developers.
                                </p>

                                <div class="flex justify-center gap-xs flex-wrap">
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink-light);">Full Stack</span>
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink-light);">AI</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Row: Co-Leads -->
                    <div class="flex flex-col md:flex-row justify-center gap-lg items-center w-full">
                        
                        <!-- Chand Murtaza -->
                        <div class="animate-drop delay-400" style="position: relative; width: 100%; max-width: 350px;">
                            <div class="paper-card" style="text-align: center; padding: var(--spacing-lg) var(--spacing-md); transform: rotate(2deg); transition: transform 0.3s;" onmouseover="this.style.transform='rotate(0deg) scale(1.02)'" onmouseout="this.style.transform='rotate(2deg) scale(1)'">
                                <div class="paperclip" style="right: 20px;"></div>
                                
                                <div style="width: 160px; height: 160px; margin: 0 auto var(--spacing-md); border-radius: 50%; overflow: hidden; border: 6px solid white; box-shadow: var(--shadow-md); position: relative;">
                                    <img src="assets/chandd.jpg" alt="Chand Murtaza" style="width: 100%; height: 100%; object-fit: cover;">
                                    <div style="position: absolute; inset: 0; border-radius: 50%; border: 4px solid var(--color-accent-teal); opacity: 0.5;"></div>
                                </div>
                                
                                <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--color-ink);">Chand Murtaza</h3>
                                <p style="font-family: var(--font-display); color: var(--color-accent-teal); font-weight: 700; font-size: 1rem; margin-bottom: var(--spacing-md); text-transform: uppercase; letter-spacing: 0.05em;">Co-Lead Developer</p>
                                
                                <p style="color: var(--color-ink-light); line-height: 1.6; margin-bottom: var(--spacing-md); font-size: 1.05rem;">
                                    Creative thinker and problem solver, dedicated to crafting unique user experiences.
                                </p>

                                <div class="flex justify-center gap-xs flex-wrap">
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; color: var(--color-ink-light);">UI/UX</span>
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; color: var(--color-ink-light);">Frontend</span>
                                </div>
                            </div>
                        </div>

                        <!-- Hasnat Amjad -->
                        <div class="animate-drop delay-500" style="position: relative; width: 100%; max-width: 350px;">
                            <div class="paper-card" style="text-align: center; padding: var(--spacing-lg) var(--spacing-md); transform: rotate(-1deg); transition: transform 0.3s;" onmouseover="this.style.transform='rotate(0deg) scale(1.02)'" onmouseout="this.style.transform='rotate(-1deg) scale(1)'">
                                <div class="paperclip" style="left: 20px; right: auto;"></div>
                                
                                <div style="width: 160px; height: 160px; margin: 0 auto var(--spacing-md); border-radius: 50%; overflow: hidden; border: 6px solid white; box-shadow: var(--shadow-md); position: relative;">
                                    <img src="assets/hasnat.jpg" alt="Hasnat Amjad" style="width: 100%; height: 100%; object-fit: cover;">
                                    <div style="position: absolute; inset: 0; border-radius: 50%; border: 4px solid var(--color-accent-sky); opacity: 0.5;"></div>
                                </div>
                                
                                <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--color-ink);">Hasnat Amjad</h3>
                                <p style="font-family: var(--font-display); color: var(--color-accent-sky); font-weight: 700; font-size: 1rem; margin-bottom: var(--spacing-md); text-transform: uppercase; letter-spacing: 0.05em;">Co-Lead Developer</p>
                                
                                <p style="color: var(--color-ink-light); line-height: 1.6; margin-bottom: var(--spacing-md); font-size: 1.05rem;">
                                    Expert in backend architecture and cloud infrastructure, ensuring robust performance.
                                </p>

                                <div class="flex justify-center gap-xs flex-wrap">
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; color: var(--color-ink-light);">Backend</span>
                                    <span style="padding: 0.25rem 0.75rem; background: var(--color-bg); border-radius: var(--radius-sm); font-family: var(--font-display); font-weight: 600; font-size: 0.8rem; color: var(--color-ink-light);">Cloud</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}
