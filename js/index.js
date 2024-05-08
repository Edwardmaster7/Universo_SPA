import { Router } from './router.js'
import { TabSwitch } from './tabSwitch.js'

const tabSwitch = new TabSwitch()
const router = new Router(tabSwitch)

router.add('/', '/pages/home.html')
router.add('/universo', '/pages/universe.html')
router.add('/exploracao', '/pages/exploration.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

