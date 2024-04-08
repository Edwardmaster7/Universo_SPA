export class Router {
    
    constructor(tabSwitch) {
        this.tabSwitch = tabSwitch
    }

    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event // verify if there is an event, otherwise catch window.event 
        event.preventDefault()
            
        window.history.pushState({}, '', event.target.href)

        this.handle()
    }

    handle() {
        // const pathname = window.location.pathname
        const { pathname } = window.location
        const route = this.routes[pathname]
        console.log('antes do fetch')
        fetch(route)
        .then((data) => data.text())
        .then(html => document.querySelector('#app').innerHTML = html)
    
        console.log(route)
        this.tabSwitch.switchTab()
    }
}


