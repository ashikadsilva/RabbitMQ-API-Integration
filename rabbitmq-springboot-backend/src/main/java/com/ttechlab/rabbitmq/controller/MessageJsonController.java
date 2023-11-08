package com.ttechlab.rabbitmq.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttechlab.rabbitmq.dto.User;
import com.ttechlab.rabbitmq.publisher.RabbitMQJsonProducer;



@RestController
@RequestMapping("/api/json/v1")
@CrossOrigin(origins = "*")
public class MessageJsonController {
	private RabbitMQJsonProducer jsonProducer;

	public MessageJsonController(RabbitMQJsonProducer jsonProducer) {
		this.jsonProducer = jsonProducer;
	}
	
	@PostMapping("/publishmessage")
	public ResponseEntity<String> sendJsonMessage(@RequestBody User user){
		jsonProducer.sendJsonMessage(user);
		return ResponseEntity.ok("Json message sent to RabbitMq...");	
	}
	
}
