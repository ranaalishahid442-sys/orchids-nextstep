window.FieldView = function (fieldId) {
  const data = window.careerData[fieldId];

  if (!data) {
    return `<div class="container"><p>Field not found.</p></div>`;
  }

  return `
    <section style="padding: var(--spacing-xl) 0; min-height: 100vh;">
      <div class="container">
        
        <button onclick="window.location.hash = '#'" class="btn btn-secondary animate-fade-up" style="margin-bottom: var(--spacing-lg);">
          ← Back to Home
        </button>

        <div class="text-center mb-16 animate-fade-up delay-100">
          <span class="handwritten" style="font-size: 1.8rem; color: var(--color-accent-coral); display: block; margin-bottom: var(--spacing-xs);">
            Explore ${data.title}
          </span>
          <h2 style="font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); font-weight: 800; margin-bottom: var(--spacing-sm); color: var(--color-ink); letter-spacing: -0.02em;">
            ${data.title}
          </h2>
          <div style="width: 120px; height: 6px; background: var(--color-accent-coral); border-radius: 3px; margin: 0 auto; opacity: 0.6;"></div>
        </div>

        <div class="grid gap-lg" style="grid-template-columns: repeat(auto-fit, minmax(450px, 1fr)); align-items: start;">

          <!-- Careers List - Notebook Style -->
          <div class="paper-card animate-drop delay-200" style="background: #fff; background-image: linear-gradient(#e1e1e1 1px, transparent 1px); background-size: 100% 2rem; line-height: 2rem; padding-top: 3rem;">
            <div class="torn-edge-top"></div>
            <div class="paperclip" style="left: 20px; right: auto; transform: rotate(-5deg);"></div>
            
            <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; margin-bottom: var(--spacing-md); color: var(--color-ink); display: flex; align-items: center; gap: 0.75rem;">
              <span style="width: 12px; height: 12px; background: var(--color-accent-coral); border-radius: 50%;"></span>
              Top Career Paths
            </h3>
            
            <div class="flex flex-col gap-md">
              ${data.careers.map((career, index) => `
                <div style="position: relative; padding-left: 1.5rem;">
                  <span style="position: absolute; left: 0; top: 0.2rem; font-family: var(--font-display); font-weight: 700; color: var(--color-accent-coral); font-size: 1.2rem;">${index + 1}.</span>
                  <h4 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; margin-bottom: 0.25rem; color: var(--color-ink);">
                    ${career.name}
                  </h4>
                  <p style="font-size: 1.05rem; color: var(--color-ink-light); line-height: 1.6; margin-bottom: 0.5rem;">${career.description}</p>
                </div>
              `).join('')}
            </div>
            <div class="torn-edge-bottom"></div>
          </div>

          <!-- Universities List -->
          <div style="grid-column: 1 / -1;">
            <h3 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 800; margin-bottom: var(--spacing-lg); color: var(--color-ink); display: flex; align-items: center; gap: 0.75rem;">
              <span style="width: 12px; height: 12px; background: var(--color-accent-teal); border-radius: 50%;"></span>
              Top Universities
            </h3>
            
            <div class="grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: var(--spacing-lg);">
              ${data.universities.map((uni, index) => {
    const rotation = (Math.random() * 4) - 2;
    return `
                  <div class="paper-card animate-drop" 
                       onclick="window.location.hash = 'university/${fieldId}/${uni.id}'"
                       style="cursor: pointer; animation-delay: ${index * 100}ms; padding: 0; overflow: hidden; transform: rotate(${rotation}deg); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);"
                       onmouseover="this.style.transform='rotate(0deg) scale(1.05) translateY(-10px)'; this.style.zIndex='10';"
                       onmouseout="this.style.transform='rotate(${rotation}deg) scale(1) translateY(0)'; this.style.zIndex='1';">
                      
                      <div class="tape" style="width: 100px; top: 10px; opacity: 0.4;"></div>

                      <!-- Image Area -->
                      <div style="padding: 1rem 1rem 0 1rem; background: white;">
                          <div style="height: 220px; overflow: hidden; background: var(--color-bg); border: 1px solid rgba(0,0,0,0.1); position: relative;">
                              <img src="${uni.image || 'assets/default-uni.jpg'}" alt="${uni.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                              <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 0.5rem; background: rgba(0,0,0,0.6); color: white; font-size: 0.8rem; text-align: center; backdrop-filter: blur(4px);">
                                  ${uni.testName ? `Entry Test: ${uni.testName}` : 'Merit Based'}
                              </div>
                          </div>
                      </div>
                      
                      <div style="padding: 1.5rem; background: white;">
                          <h4 style="font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--color-ink); line-height: 1.2;">${uni.name}</h4>
                          <p style="color: var(--color-ink-light); margin-bottom: var(--spacing-md); font-size: 0.95rem; line-height: 1.5; border-bottom: 1px dashed var(--color-bg); padding-bottom: 0.5rem;">
                             <span style="font-weight: 600; color: var(--color-accent-teal);">Criteria:</span> ${uni.criteria}
                          </p>
                          
                          <div style="display: flex; justify-content: space-between; align-items: center;">
                              <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-accent-coral);">View Details &rarr;</span>
                          </div>
                      </div>
                  </div>
                `
  }).join('')}
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
