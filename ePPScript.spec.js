// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('EPP Script', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('EPP Script', async function() {
    await driver.get("https://fsystemo.noceast.dws.disney.com/epp/Login")
    assert(await driver.getTitle() == "DVC ePurchase Proposal")
    await driver.findElement(By.id("f_AS400UserId")).sendKeys("carla081")
    await driver.findElement(By.id("f_AS400Password")).sendKeys("Disney4")
    await driver.findElement(By.linkText("Login")).click()
    {
      const elements = await driver.findElements(By.css("h2:nth-child(2)"))
      assert(elements.length)
    }
    await driver.findElement(By.id("f_msmNumber")).sendKeys("5460153")
    await driver.findElement(By.id("shopButton")).click()
    {
      const elements = await driver.findElements(By.css(".shopFormSection:nth-child(3)"))
      assert(elements.length)
    }
    await driver.findElement(By.id("points")).sendKeys("40")
    await driver.findElement(By.id("masterUseMonthSelect")).click()
    {
      const dropdown = await driver.findElement(By.id("masterUseMonthSelect"))
      await dropdown.findElement(By.xpath("//option[. = 'Jun']")).click()
    }
    await driver.findElement(By.id("masterUseMonthSelect")).click()
    await driver.findElement(By.id("resortSelect")).click()
    {
      const dropdown = await driver.findElement(By.id("resortSelect"))
      await dropdown.findElement(By.xpath("//option[. = 'AKV - Disney\'s Animal Kingdom Villas - Jambo']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("resortSelect"))
      await dropdown.findElement(By.xpath("//option[. = 'AKV - Disney\'s Animal Kingdom Villas - Jambo']")).click()
    }
    await driver.findElement(By.id("resortSelect")).click()
    {
      const element = await driver.findElement(By.id("searchInventoryButton"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.id("searchInventoryButton"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.id("searchInventoryButton"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.id("searchInventoryButton")).click()
    {
      const element = await driver.findElement(By.css(".ui-button-text:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).clickAndHold().perform()
    }
    {
      const element = await driver.findElement(By.css(".ui-button-text:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    {
      const element = await driver.findElement(By.css(".ui-button-text:nth-child(1)"))
      await driver.actions({ bridge: true }).moveToElement(element).release().perform()
    }
    await driver.findElement(By.css(".ui-button-text:nth-child(1)")).click()
    {
      const elements = await driver.findElements(By.id("fBox3"))
      assert(elements.length)
    }
    await driver.findElement(By.id("f_mailOut")).click()
    {
      const dropdown = await driver.findElement(By.id("f_mailOut"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("f_mailOut")).click()
    await driver.findElement(By.id("f_eDocsOut")).click()
    {
      const dropdown = await driver.findElement(By.id("f_eDocsOut"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("f_eDocsOut")).click()
  })
})
