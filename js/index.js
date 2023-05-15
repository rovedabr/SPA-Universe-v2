import { Router } from "./router.js"

const router = new Router()
router.add("/home", "./pages/home.html")
router.add("/universe", "./pages/universe.html")
router.add("/exploration" , "./pages/exploration.html")
router.add("/404.html", "./pages/404.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()