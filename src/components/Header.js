window.Header = function () {
  return `
    <header style="position: sticky; top: 0; z-index: 1000; background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(0,0,0,0.05); transition: all 0.3s;">
      <div class="container flex justify-between items-center" style="height: 80px;">
        
        <a href="#" class="flex items-center gap-sm group" style="text-decoration: none;">
          <div style="width: 48px; height: 48px; background: var(--color-accent-coral); border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm); transform: rotate(-3deg); transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); overflow: hidden;" onmouseover="this.style.transform='rotate(3deg) scale(1.1)'" onmouseout="this.style.transform='rotate(-3deg) scale(1)'">
            <img src="assets/logo.png" alt="Next Step Logo" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div>
            <span style="font-family: var(--font-display); font-weight: 800; font-size: 1.5rem; color: var(--color-ink); display: block; line-height: 1;">Next Step</span>
            <span class="handwritten" style="font-size: 0.85rem; color: var(--color-ink-light); transform: rotate(0deg); display: block;">your future awaits!</span>
          </div>
        </a>

        <nav class="hidden sm:block">
          <ul class="flex gap-lg" style="list-style: none; margin: 0; padding: 0;">
            <li>
              <a href="#" style="font-family: var(--font-display); font-weight: 600; color: var(--color-ink); position: relative; padding: 0.5rem 0;" 
                 onmouseover="this.querySelector('span').style.width='100%'" 
                 onmouseout="this.querySelector('span').style.width='0%'">
                Home
                <span style="position: absolute; bottom: 0; left: 0; width: 0%; height: 3px; background: var(--color-accent-coral); transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); border-radius: 2px;"></span>
              </a>
            </li>
            <li>
              <a href="#careers" style="font-family: var(--font-display); font-weight: 600; color: var(--color-ink); position: relative; padding: 0.5rem 0;"
                 onmouseover="this.querySelector('span').style.width='100%'" 
                 onmouseout="this.querySelector('span').style.width='0%'">
                Careers
                <span style="position: absolute; bottom: 0; left: 0; width: 0%; height: 3px; background: var(--color-accent-teal); transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); border-radius: 2px;"></span>
              </a>
            </li>
            <li>
              <a href="#freelancing" style="font-family: var(--font-display); font-weight: 600; color: var(--color-ink); position: relative; padding: 0.5rem 0;"
                 onmouseover="this.querySelector('span').style.width='100%'" 
                 onmouseout="this.querySelector('span').style.width='0%'">
                Skills
                <span style="position: absolute; bottom: 0; left: 0; width: 0%; height: 3px; background: var(--color-accent-mustard); transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); border-radius: 2px;"></span>
              </a>
            </li>
            <li>
              <a href="#about" style="font-family: var(--font-display); font-weight: 600; color: var(--color-ink); position: relative; padding: 0.5rem 0;"
                 onmouseover="this.querySelector('span').style.width='100%'" 
                 onmouseout="this.querySelector('span').style.width='0%'">
                About
                <span style="position: absolute; bottom: 0; left: 0; width: 0%; height: 3px; background: var(--color-accent-lavender); transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); border-radius: 2px;"></span>
              </a>
            </li>
          </ul>
        </nav>

        <a href="#contact" class="btn btn-primary hidden sm:inline-flex">Get Started →</a>
      </div>
    </header>
  `;
}
