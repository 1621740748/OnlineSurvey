package edu.yonatan.onlinesurvey.config;

import java.util.List;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.alibaba.fastjson.serializer.SerializerFeature;
import com.alibaba.fastjson.support.config.FastJsonConfig;
import com.alibaba.fastjson.support.spring.FastJsonHttpMessageConverter;

@Configuration
@EnableWebMvc
class MvcConfig extends WebMvcConfigurerAdapter {

	  @Override
	  public void configureMessageConverters(List<HttpMessageConverter<?>> converters) {
	    super.configureMessageConverters(converters);

	    FastJsonHttpMessageConverter fastConverter = new FastJsonHttpMessageConverter();

	    FastJsonConfig fastJsonConfig = new FastJsonConfig();
	    fastJsonConfig.setSerializerFeatures(SerializerFeature.PrettyFormat,
	        SerializerFeature.SortField);
	    fastConverter.setFastJsonConfig(fastJsonConfig);
	    MyStringHttpMessageConverter2 stringConverter = new MyStringHttpMessageConverter2();
	    stringConverter.setWriteAcceptCharset(false);
	    converters.add(stringConverter);
	    converters.add(fastConverter);
	  }

	    @Bean
	    public FilterRegistrationBean filterRegistrationBean() {
	        FilterRegistrationBean registrationBean = new FilterRegistrationBean();
	        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
	        characterEncodingFilter.setForceEncoding(true);
	        characterEncodingFilter.setEncoding("UTF-8");
	        registrationBean.setFilter(characterEncodingFilter);
	        return registrationBean;
	    }

}