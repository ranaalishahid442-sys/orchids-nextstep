window.UniversityView = function (fieldId, uniId) {
    const field = window.careerData[fieldId];

    if (!field) return `<div class="container"><p>Field not found.</p></div>`;

    const uni = field.universities.find(u => u.id === uniId);

    if (!uni) return `<div class="container"><p>University not found.</p></div>`;

    window.calculateMerit = function () {
        const matric = parseFloat(document.getElementById('matric-marks').value) || 0;
        const matricTotal = parseFloat(document.getElementById('matric-total').value) || 1100;
        const fsc = parseFloat(document.getElementById('fsc-marks').value) || 0;
        const fscTotal = parseFloat(document.getElementById('fsc-total').value) || 1100;
        const test = parseFloat(document.getElementById('test-marks').value) || 0;
        const testTotal = parseFloat(document.getElementById('test-total').value) || 200;

        const matricPerc = (matric / matricTotal) * 100;
        const fscPerc = (fsc / fscTotal) * 100;
        const testPerc = (test / testTotal) * 100;

        const aggregate = (matricPerc * (uni.formula.matric / 100)) +
            (fscPerc * (uni.formula.fsc / 100)) +
            (testPerc * (uni.formula.test / 100));

        const resultDisplay = document.getElementById('result-display');
        resultDisplay.innerText = `${aggregate.toFixed(2)}%`;
        resultDisplay.parentElement.style.opacity = '1';
        resultDisplay.parentElement.style.transform = 'translateY(0)';
    };

    return `
    <section style="padding: var(--spacing-xl) 0; max-width: 1100px; margin: 0 auto;">
      <div class="container">
        <button onclick="window.location.hash = 'field/${fieldId}'" class="btn btn-secondary animate-fade-up" style="margin-bottom: var(--spacing-md);">
          ← Back to ${field.title}
        </button>
        
        <div class="paper-card animate-drop" style="padding: 0; overflow: hidden; background: var(--color-paper);">
          
          <!-- Immersive Hero -->
          <div style="height: 400px; width: 100%; position: relative; overflow: hidden;">
              <img src="${uni.image || 'assets/kemu.png'}" alt="${uni.name}" style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.05);">
              <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7), transparent 60%);"></div>
              
              <div style="position: absolute; bottom: var(--spacing-lg); left: var(--spacing-lg); z-index: 2; color: white;">
                  <span class="handwritten" style="font-size: 1.4rem; color: var(--color-accent-mustard); display: block; margin-bottom: 0.25rem;">
                      Your dream university
                  </span>
                  <h2 style="font-family: var(--font-display); font-size: clamp(2.5rem, 5vw, 4.5rem); font-weight: 800; line-height: 1; text-shadow: 0 2px 10px rgba(0,0,0,0.3);">${uni.name}</h2>
              </div>
              
              <!-- Official Website Button -->
              <div style="position: absolute; top: var(--spacing-lg); right: var(--spacing-lg); z-index: 2;">
                  <a href="${uni.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="text-decoration: none; box-shadow: var(--shadow-xl); padding: 0.5rem 1rem; font-size: 0.9rem;">
                      Visit Official Website ↗
                  </a>
              </div>

              <div class="torn-edge-bottom" style="bottom: -1px; z-index: 3;"></div>
          </div>

          <div style="padding: var(--spacing-lg);">
              
              <div class="grid gap-lg" style="grid-template-columns: 1fr 1fr; margin-bottom: var(--spacing-2xl);">
                  <div class="animate-fade-up delay-200">
                      <h3 style="font-family: var(--font-display); color: var(--color-accent-coral); font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-sm); display: flex; align-items: center; gap: 0.75rem;">
                          <span style="width: 10px; height: 10px; background: var(--color-accent-coral); border-radius: 50%;"></span>
                          Admission Criteria
                      </h3>
                      <p style="color: var(--color-ink); font-size: 1.1rem; line-height: 1.7;">${uni.criteria}</p>
                  </div>
                  <div class="animate-fade-up delay-300">
                      <h3 style="font-family: var(--font-display); color: var(--color-accent-teal); font-size: 1.5rem; font-weight: 700; margin-bottom: var(--spacing-sm); display: flex; align-items: center; gap: 0.75rem;">
                          <span style="width: 10px; height: 10px; background: var(--color-accent-teal); border-radius: 50%;"></span>
                          Merit Formula
                      </h3>
                      <ul style="list-style: none; font-size: 1.1rem; padding: 0;">
                          <li style="margin-bottom: 0.75rem; display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 2px dashed var(--color-bg);">
                              <span>Matriculation</span> <strong style="color: var(--color-accent-coral); font-family: var(--font-display);">${uni.formula.matric}%</strong>
                          </li>
                          <li style="margin-bottom: 0.75rem; display: flex; justify-content: space-between; padding-bottom: 0.75rem; border-bottom: 2px dashed var(--color-bg);">
                              <span>Intermediate (FSc)</span> <strong style="color: var(--color-accent-coral); font-family: var(--font-display);">${uni.formula.fsc}%</strong>
                          </li>
                          <li style="display: flex; justify-content: space-between;">
                              <span>${uni.testName}</span> <strong style="color: var(--color-accent-coral); font-family: var(--font-display);">${uni.formula.test}%</strong>
                          </li>
                      </ul>
                  </div>
              </div>

              <!-- Calculator Card -->
              <div class="paper-card animate-scale delay-400" style="background: var(--color-bg); padding: var(--spacing-lg); border: 2px solid rgba(0,0,0,0.03);">
                  <div class="paperclip" style="right: 40px;"></div>
                  
                  <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; margin-bottom: var(--spacing-md); color: var(--color-ink); display: flex; align-items: center; gap: 0.75rem;">
                      <span style="width: 12px; height: 12px; background: var(--color-accent-mustard); border-radius: 50%;"></span>
                      Merit Calculator
                  </h3>
                  
                  <div class="grid gap-md" style="grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));">
                      <div class="flex flex-col gap-xs">
                          <label style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--color-ink); margin-bottom: 0.25rem;">Matric Marks</label>
                          <div class="flex gap-xs">
                              <input type="number" id="matric-marks" placeholder="Obtained" style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink); font-family: var(--font-body); font-size: 1rem; outline: none; transition: all 0.2s; box-shadow: var(--shadow-inner);" onfocus="this.style.borderColor='var(--color-accent-coral)'; this.style.background='white';" onblur="this.style.borderColor='var(--color-paper)'; this.style.background='var(--color-paper)';">
                              <input type="number" id="matric-total" value="1100" style="width: 90px; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink-light); font-family: var(--font-body); font-size: 1rem; text-align: center; box-shadow: var(--shadow-inner);">
                          </div>
                      </div>
                      
                      <div class="flex flex-col gap-xs">
                          <label style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--color-ink); margin-bottom: 0.25rem;">FSc / Inter Marks</label>
                          <div class="flex gap-xs">
                              <input type="number" id="fsc-marks" placeholder="Obtained" style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink); font-family: var(--font-body); font-size: 1rem; outline: none; transition: all 0.2s; box-shadow: var(--shadow-inner);" onfocus="this.style.borderColor='var(--color-accent-teal)'; this.style.background='white';" onblur="this.style.borderColor='var(--color-paper)'; this.style.background='var(--color-paper)';">
                              <input type="number" id="fsc-total" value="1100" style="width: 90px; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink-light); font-family: var(--font-body); font-size: 1rem; text-align: center; box-shadow: var(--shadow-inner);">
                          </div>
                      </div>

                      <div class="flex flex-col gap-xs" style="grid-column: 1 / -1;">
                          <label style="font-family: var(--font-display); font-weight: 700; font-size: 0.95rem; color: var(--color-ink); margin-bottom: 0.25rem;">${uni.testName} Marks</label>
                          <div class="flex gap-xs">
                              <input type="number" id="test-marks" placeholder="Obtained" style="width: 100%; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink); font-family: var(--font-body); font-size: 1rem; outline: none; transition: all 0.2s; box-shadow: var(--shadow-inner);" onfocus="this.style.borderColor='var(--color-accent-mustard)'; this.style.background='white';" onblur="this.style.borderColor='var(--color-paper)'; this.style.background='var(--color-paper)';">
                              <input type="number" id="test-total" value="200" placeholder="Total" style="width: 120px; padding: 1rem; border-radius: var(--radius-sm); border: 2px solid var(--color-paper); background: var(--color-paper); color: var(--color-ink-light); font-family: var(--font-body); font-size: 1rem; text-align: center; box-shadow: var(--shadow-inner);">
                          </div>
                      </div>
                  </div>

                  <div class="flex items-center justify-between" style="margin-top: var(--spacing-lg); padding-top: var(--spacing-md); border-top: 3px dashed var(--color-paper);">
                      <button onclick="calculateMerit()" class="btn btn-primary">Calculate Merit</button>
                      
                      <div style="text-align: right; opacity: 0; transform: translateY(10px); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);">
                          <span style="display: block; font-family: var(--font-display); font-weight: 600; font-size: 0.9rem; color: var(--color-ink-light); margin-bottom: 0.25rem;">Your Aggregate</span>
                          <div id="result-display" style="font-family: var(--font-display); font-size: 3.5rem; font-weight: 800; color: var(--color-accent-coral); line-height: 1; letter-spacing: -0.02em;">0.00%</div>
                      </div>
                  </div>

              </div>

          </div>

              <!-- Career Paths in this Field -->
              <div class="animate-fade-up delay-500" style="margin-top: var(--spacing-2xl);">
                  <div style="margin-bottom: var(--spacing-lg); text-align: center;">
                       <h3 style="font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--color-ink); margin-bottom: var(--spacing-xs);">
                        Career Paths
                       </h3>
                       <p style="color: var(--color-ink-light);">Programs offered in this field</p>
                  </div>

                  <div class="grid gap-md" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                      ${field.careers.map((career, index) => `
                          <div class="paper-card" style="padding: var(--spacing-md); transform: rotate(${(index % 2 === 0 ? 1 : -1)}deg);">
                              <div class="tape" style="top: -10px; left: 50%; transform: translateX(-50%); width: 60px; opacity: 0.5;"></div>
                              <h4 style="font-family: var(--font-display); font-size: 1.2rem; font-weight: 700; color: var(--color-ink); margin-bottom: 0.5rem;">
                                  ${career.name}
                              </h4>
                              <p style="font-size: 0.95rem; color: var(--color-ink-light); line-height: 1.5;">${career.description}</p>
                          </div>
                      `).join('')}
                  </div>
              </div>
        </div>
      </div>
    </section>
  `;
}
