
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Take screenshot of the nav area
  await page.screenshot({ path: '/tmp/nav-centered.png', clip: { x: 0, y: 0, width: 1920, height: 200 } });
  console.log('📸 Nav screenshot saved to /tmp/nav-centered.png');
  
  // Check the nav text size
  const navText = await page.evaluate(() => {
    const navLinks = document.querySelectorAll('nav a');
    const results = [];
    navLinks.forEach(link => {
      const styles = window.getComputedStyle(link);
      results.push({
        text: link.textContent,
        fontSize: styles.fontSize
      });
    });
    return results;
  });
  
  console.log('\n=== Nav Text Sizes ===');
  navText.forEach(item => {
    console.log(`${item.text}: ${item.fontSize}`);
  });
  
  await browser.close();
})();
