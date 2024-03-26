package app.payplan.payplanbackend;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // This applies CORS settings to all endpoints in your application
                        .allowedOrigins("http://localhost:8081") // Allows requests from your React app's origin
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Specifies which HTTP methods are allowed
                        .allowedHeaders("*") // Allows all headers
                        .allowCredentials(true); // Allows credentials, such as cookies, to be sent with requests
            }
        };
    }
}