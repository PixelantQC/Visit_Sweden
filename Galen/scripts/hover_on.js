var action = new Actions(driver);
var we = driver.findElement(By.cssSelector('li.social-feed-instagram a'));
action.moveToElement(we).perform();
