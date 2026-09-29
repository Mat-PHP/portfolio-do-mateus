package com.mateus.portfolio;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "${portfolio.frontend-origin:http://localhost:5173}")
public class PortfolioController {

    @GetMapping("/portfolio")
    public Map<String, Object> portfolio() {
        return Map.of(
            "name", "Mateus Ferreira Salustiano",
            "role", "Full Stack Developer",
            "location", "Campinas, São Paulo, Brazil",
            "availability", "Available for international relocation",
            "summary", "I build reliable backend services, integrations and responsive digital products. My work connects software engineering with automation, data and business operations.",
            "experience", List.of(
                Map.of(
                    "company", "Robert Bosch Brazil",
                    "unit", "Mobility Aftermarket",
                    "role", "Full Stack Developer",
                    "period", "Present",
                    "description", "Backend development, REST API integrations, internal applications and corporate automation across multidisciplinary teams.",
                    "highlights", List.of(
                        "Developing APIs, reusable software components and responsive interfaces",
                        "Integrating applications, databases and corporate systems",
                        "Building Python automations, bots and data-processing solutions"
                    ),
                    "technologies", List.of("Python", "React", "TypeScript", "Java", "PostgreSQL", "MongoDB", "OutSystems")
                ),
                Map.of(
                    "company", "CNPEM",
                    "unit", "Brazilian Center for Research in Energy and Materials",
                    "role", "Full Stack Developer · Process Automation",
                    "period", "2018 — 2025",
                    "description", "Seven years creating full stack applications, automation solutions, dashboards and database-backed systems for research operations.",
                    "highlights", List.of(
                        "Built and integrated REST APIs with Java, Spring Boot, PHP and Python",
                        "Developed React interfaces and automated testing with Selenium",
                        "Created automation and analytics solutions with Python, VBA and Power BI"
                    ),
                    "technologies", List.of("Java", "Spring Boot", "React", "Python", "REST APIs", "SQL", "Power BI")
                )
            ),
            "capabilities", List.of(
                Map.of("title", "Backend & APIs", "body", "Java, Spring Boot, Python, PHP, REST APIs and systems integration."),
                Map.of("title", "Frontend", "body", "React, TypeScript, JavaScript, Flutter, HTML, CSS and responsive design."),
                Map.of("title", "Data", "body", "PostgreSQL, MongoDB, SQL, NoSQL, Pandas, Power BI and data processing."),
                Map.of("title", "Automation", "body", "Automation Anywhere, OutSystems, PyAutoGUI, Excel VBA and corporate bots."),
                Map.of("title", "Quality & Delivery", "body", "Git, GitHub, CI/CD, Agile, Selenium, testing and technical documentation."),
                Map.of("title", "Product Design", "body", "Prototyping, interface design and collaborative discovery with Figma.")
            ),
            "education", List.of(
                Map.of("program", "Bachelor's Degree in Artificial Intelligence", "school", "UNIGRAN", "status", "In progress"),
                Map.of("program", "Technical Program in Systems Development", "school", "SENAI Roberto Mange", "status", "Completed"),
                Map.of("program", "Professional Programming Course", "school", "Microcamp", "status", "Completed")
            )
        );
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of("status", "UP");
    }
}
