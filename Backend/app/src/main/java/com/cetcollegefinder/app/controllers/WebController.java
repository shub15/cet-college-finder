package com.cetcollegefinder.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {

    // This API will serve the homepage of your website
    @GetMapping("/")
    public String serveHomePage() {
        // It will serve index.html located in src/main/resources/static
        return "index.html"; // Spring will automatically look for src/main/resources/static/index.html
    }

    @RequestMapping(value = { "/", "/about", "/search", "/form", "/colleges", "/login", "/logout", "/signup",
            "/dashboard", "/admin", "/admin/login", "/admin/home", "/admin/notifications" }) 
    public String forwardToIndex() {
        return "forward:/index.html";
    }
}