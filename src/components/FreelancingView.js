window.FreelancingView = function () {
    const skills = window.careerData.freelancing.skills;

    const platformUrlMap = {
        "Upwork": "https://www.upwork.com/",
        "Fiverr": "https://www.fiverr.com/",
        "LinkedIn": "https://www.linkedin.com/jobs/",
        "Toptal": "https://www.toptal.com/",
        "RemoteOK": "https://remoteok.com/",
        "Behance": "https://www.behance.net/jobs",
        "Dribbble": "https://dribbble.com/jobs",
        "99designs": "https://99designs.com/",
        "Medium": "https://medium.com/",
        "ProBlogger": "https://problogger.com/jobs/",
        "Indeed": "https://www.indeed.com/",
        "Glassdoor": "https://www.glassdoor.com/",
        "YTJobs": "https://ytjobs.co/",
        "Freelancer": "https://www.freelancer.com/",
        "PeoplePerHour": "https://www.peopleperhour.com/",
        "Clickworker": "https://www.clickworker.com/",
        "Guru": "https://www.guru.com/",
        "Belay": "https://belaysolutions.com/",
        "Time Etc": "https://web.timeetc.com/"
    };

    window.openSkillModal = function (skillId) {
        const skill = skills.find(s => s.id === skillId);
        console.log('Opening modal for skill:', skill);
        if (!skill) return;

        const modal = document.createElement('div');
        modal.id = 'skill-modal';
        modal.style.cssText = 'position: fixed; inset: 0; z-index: 2000; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.6); backdrop-filter: blur(8px); padding: 1rem; opacity: 0; transition: opacity 0.3s;';

        // Trigger reflow for transition
        setTimeout(() => modal.style.opacity = '1', 10);

        modal.innerHTML = `
            <div class="paper-card" style="max-width: 900px; width: 100%; max-height: 90vh; overflow-y: auto; position: relative; transform: scale(0.9); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);">
                <div class="torn-edge-top"></div>
                
                <button onclick="document.getElementById('skill-modal').style.opacity='0'; setTimeout(() => document.getElementById('skill-modal').remove(), 300)" style="position: absolute; top: 1.5rem; right: 1.5rem; width: 44px; height: 44px; background: var(--color-accent-coral); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; transition: transform 0.2s; box-shadow: var(--shadow-md); z-index: 10;" onmouseover="this.style.transform='rotate(90deg) scale(1.1)'" onmouseout="this.style.transform='rotate(0deg) scale(1)'">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg); padding-top: var(--spacing-md);">
                    <div style="position: relative;">
                        <div style="height: 350px; border-radius: var(--radius-md); overflow: hidden; box-shadow: var(--shadow-md); transform: rotate(-2deg); border: 8px solid white; background: white;">
                            <img src="${skill.image}" alt="${skill.name}" style="width: 100%; height: 100%; object-fit: cover;">
                        </div>
                        <div class="tape" style="top: -10px; width: 140px;"></div>
                    </div>
                    
                    <div>
                        <span class="handwritten" style="font-size: 1.4rem; color: var(--color-accent-teal); display: block; margin-bottom: 0.5rem;">Master this skill</span>
                        <h2 style="font-family: var(--font-display); font-size: 3rem; font-weight: 800; margin-bottom: var(--spacing-sm); color: var(--color-ink); line-height: 1;">${skill.name}</h2>
                        <p style="font-size: 1.1rem; color: var(--color-ink-light); margin-bottom: var(--spacing-md); line-height: 1.6;">${skill.description}</p>
                        
                        <div class="flex gap-sm flex-wrap mb-8">
                            <span style="padding: 0.5rem 1rem; background: var(--color-bg); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink);">🔥 High Demand</span>
                            <span style="padding: 0.5rem 1rem; background: var(--color-bg); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink);">💰 Good Pay</span>
                        </div>
                    </div>
                </div>

                <div style="margin-top: var(--spacing-lg); padding-top: var(--spacing-lg); border-top: 3px dashed var(--color-bg);">
                    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-xl);">
                        
                        <!-- Learning Pathway -->
                        <div>
                            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-md); color: var(--color-ink); display: flex; align-items: center; gap: 0.75rem;">
                                <span style="width: 12px; height: 12px; background: var(--color-accent-coral); border-radius: 50%;"></span>
                                Learning Path
                            </h3>
                            
                            <div style="display: flex; flex-direction: column; gap: var(--spacing-md); position: relative;">
                                <div style="position: absolute; left: 15px; top: 15px; bottom: 15px; width: 2px; background: var(--color-bg);"></div>
                                ${skill.roadmap.map((step, index) => `
                                    <div class="animate-fade-up visible" style="display: flex; gap: var(--spacing-sm); align-items: start; position: relative; animation-delay: ${index * 100}ms;">
                                        <div style="flex-shrink: 0; width: 32px; height: 32px; background: var(--color-accent-mustard); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 0.9rem; color: var(--color-ink); box-shadow: var(--shadow-sm); z-index: 1; border: 2px solid var(--color-paper);">
                                            ${index + 1}
                                        </div>
                                        <div style="flex-grow: 1; padding: var(--spacing-sm) var(--spacing-md); background: var(--color-bg); border-radius: var(--radius-sm); border-left: 3px solid var(--color-accent-teal); font-size: 0.95rem; color: var(--color-ink);">
                                            ${step}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>

                            <!-- Free Courses -->
                            <div style="margin-top: var(--spacing-lg);">
                                <h4 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; margin-bottom: var(--spacing-sm); color: var(--color-ink); display: flex; align-items: center; gap: 0.5rem;">
                                    <span style="font-size: 1.2rem;">🎓</span> Recommended Free Courses
                                </h4>
                                <div style="display: flex; flex-direction: column; gap: var(--spacing-xs);">
                                    ${skill.courses ? skill.courses.map((course, index) => `
                                        <a href="${course.link}" target="_blank" rel="noopener noreferrer" class="animate-fade-up visible" style="display: flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm); background: white; border-radius: var(--radius-sm); border: 1px solid var(--color-bg); text-decoration: none; transition: transform 0.2s; animation-delay: ${(index + 5) * 100}ms;" onmouseover="this.style.transform='translateX(4px)'" onmouseout="this.style.transform='translateX(0)'">
                                            <span style="width: 6px; height: 6px; background: var(--color-accent-mustard); border-radius: 50%;"></span>
                                            <span style="font-size: 0.95rem; color: var(--color-ink); font-weight: 500;">${course.title}</span>
                                            <span style="margin-left: auto; color: var(--color-accent-teal); font-size: 0.8rem;">Start Learning &rarr;</span>
                                        </a>
                                    `).join('') : '<p style="font-size: 0.9rem; color: var(--color-ink-light);">No courses available yet.</p>'}
                                </div>
                            </div>
                        </div>

                        <!-- Job Pathway -->
                        <div>
                            <h3 style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-md); color: var(--color-ink); display: flex; align-items: center; gap: 0.75rem;">
                                <span style="width: 12px; height: 12px; background: var(--color-accent-teal); border-radius: 50%;"></span>
                                Job Opportunities
                            </h3>
                            
                            <div style="display: grid; grid-template-columns: 1fr; gap: var(--spacing-sm);">
                                ${skill.jobSearch ? skill.jobSearch.map((job, index) => `
                                    <a href="${platformUrlMap[job] || '#'}" target="_blank" rel="noopener noreferrer" class="animate-fade-up visible" style="display: flex; align-items: center; gap: var(--spacing-sm); padding: var(--spacing-sm) var(--spacing-md); background: white; border: 1px solid var(--color-bg); border-radius: var(--radius-md); box-shadow: var(--shadow-sm); transition: transform 0.2s; animation-delay: ${(index + 5) * 100}ms; text-decoration: none;" onmouseover="this.style.transform='translateX(5px)'" onmouseout="this.style.transform='translateX(0)'">
                                        <div style="width: 8px; height: 8px; background: var(--color-accent-coral); border-radius: 50%;"></div>
                                        <span style="font-weight: 600; color: var(--color-ink);">${job}</span>
                                        <span style="margin-left: auto; color: var(--color-ink-light); font-size: 0.8rem;">Apply &rarr;</span>
                                    </a>
                                `).join('') : '<p>No job data available.</p>'}
                            </div>
                            
                            <div style="margin-top: var(--spacing-lg); padding: var(--spacing-md); background: rgba(255, 214, 10, 0.1); border-radius: var(--radius-md); border: 2px dashed var(--color-accent-mustard);">
                                <p style="font-size: 0.9rem; color: var(--color-ink); margin: 0; text-align: center;">
                                    <strong>Pro Tip:</strong> Build a strong portfolio before applying!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Animate in
        setTimeout(() => {
            modal.querySelector('.paper-card').style.transform = 'scale(1)';
        }, 10);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.opacity = '0';
                setTimeout(() => modal.remove(), 300);
            }
        });
    };

    return `
    <section id="freelancing" style="padding: var(--spacing-2xl) 0; min-height: 100vh;">
        <div class="container">
            <div class="text-center mb-16 animate-fade-up">
                <span class="handwritten" style="font-size: 1.8rem; color: var(--color-accent-teal); display: block; margin-bottom: var(--spacing-xs);">
                    Build your skillset
                </span>
                <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800; margin-bottom: var(--spacing-sm); color: var(--color-ink); letter-spacing: -0.02em;">
                    Freelancing Skills
                </h2>
                <p style="font-size: 1.2rem; color: var(--color-ink-light); max-width: 600px; margin: 0 auto; line-height: 1.6;">
                    Master high-demand skills and start earning while you learn. Click on a skill to see the roadmap.
                </p>
            </div>
            
            <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--spacing-lg);">
                ${skills.map((skill, index) => {
        const rotation = (Math.random() * 6) - 3;
        return `
                    <div class="paper-card animate-drop" onclick="window.openSkillModal('${skill.id}')" style="cursor: pointer; animation-delay: ${index * 100}ms; padding: 0; overflow: hidden; transform: rotate(${rotation}deg); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);"
                         onmouseover="this.style.transform='rotate(0deg) scale(1.05) translateY(-10px)'; this.style.zIndex='10';"
                         onmouseout="this.style.transform='rotate(${rotation}deg) scale(1) translateY(0)'; this.style.zIndex='1';">
                        
                        <div class="tape" style="width: 100px; top: 10px; opacity: 0.4;"></div>

                        <!-- Polaroid-style image -->
                        <div style="padding: 1rem 1rem 0 1rem; background: white;">
                            <div style="height: 240px; overflow: hidden; background: var(--color-bg); border: 1px solid rgba(0,0,0,0.1);">
                                <img src="${skill.image}" alt="${skill.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;">
                            </div>
                        </div>
                        
                        <div style="padding: 1.5rem; background: white;">
                            <h3 style="font-family: var(--font-handwritten); font-size: 2rem; font-weight: 700; margin-bottom: var(--spacing-xs); color: var(--color-ink); text-align: center;">${skill.name}</h3>
                            <p style="color: var(--color-ink-light); margin-bottom: var(--spacing-md); font-size: 0.95rem; line-height: 1.6; text-align: center; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${skill.description}</p>
                            
                            <div style="display: flex; justify-content: center;">
                                <span class="btn btn-secondary" style="padding: 0.5rem 1.5rem; font-size: 0.9rem;">View Pathway</span>
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
    </section>
    `;
}
