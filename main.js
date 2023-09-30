import { log } from "console"
import "./style.css"
import { getWeather } from "./Weather"

getWeather(52, 13, Intl.DateTimeFormat().resolvedOptions().timeZone).then(renderWeather).
catchcatch(e=>{
    console.error(e)
    alert("Erroe Retrieving Weather.");
})

function renderWeather({current, daily, hourly}) {
    renderCurrentWeather(current)
    renderDailyWeather(daily)
    renderHourlyWeather(hourly)
}

function setValue(selector, value, {parent = documnet} = {}) {
    parent.querySelector(`[data-${selector}]`).textContent = value
}

function getIconUrl(iconCode) {
    return `icons/${iconCode}.svg`
}

const currentIcon = document.querySelector("[data-current-icon]")
function renderCurrentWeather(current) {
    currentIcon.src = getIconUrl(current.iconCode)
  setValue("current-temp", current.currentTemp)
  setValue("current-high", current.highTemp)
  setValue("current-low", current.lowTemp)
  setValue("current-wind", current.windSpeed)
  setValue("current-relativeHumidity", current.relativeHumidity)

}