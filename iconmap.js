export const ICON_MAP = new Map()

    ICON_MAP.set(0, "sun")
    ICON_MAP.set(1, "sun")
    addMapping([0, 1], "sun")

    addMapping([2,800], "cloud-sun")
    addMapping([3,701,711,721,], "cloud")
    addMapping([45,48], "smog")
    addMapping([
        51,53,55,56,57,61,63,65,66,67,80,81,82,200,201,202,210,211,212,221,230,231,300,301,302,310,311,312,313,314,321,500,501,502,503,504,511,520,521,522,531], 
        "cloud-shower-heavy"
     )
     addMapping([71,73,75,77,85,86,600,601,602,611,612,613,615,615,620,621,622], "snowflake")
     addMapping([95,96,99], "cloud-bolt")


    function addMapping(values, icon) {
        values.forEach(value => {
        ICON_MAP.set(value, icon)
    })
}
