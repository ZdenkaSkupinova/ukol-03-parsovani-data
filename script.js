const parseDate = (date) => {
  const format = "DD.MM.YYYY"

  return "Day: " + date.slice(0, 2) + ", " + "month: " + date.slice(3, 5) + ", "  + "year: " + date.slice(6, 11)
 }
 
 document.body.innerHTML = `
 <p>${parseDate("01.01.1900")}<p/>
 <p>${parseDate("15.08.2024")}<p/>
 <p>${parseDate("12.08.2014")}<p/>
 `