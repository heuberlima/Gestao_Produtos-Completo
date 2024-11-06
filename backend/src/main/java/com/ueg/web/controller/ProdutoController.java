package com.ueg.web.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ueg.web.exception.ResourceNotFoundException;
import com.ueg.web.model.Produto;
import com.ueg.web.repository.ProdutoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;
import java.util.List;


@RequestMapping("/pcontroller/")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoRepository pRep;
	
	//Listar todos os produtos
	@GetMapping("/produtos")
	public List<Produto> listar(){
		
		return this.pRep.findAll();
		
	}
	
	//Consultar produto
	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produto> consultar(@PathVariable Long id){
		
		Produto produto = pRep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto nao encontrado: " + id));
		
		return ResponseEntity.ok(produto);
	}
	
	
	//Inserir produto
	@PostMapping("/produtos")
	public Produto inserir(@RequestBody Produto produto) {
		
		return pRep.save(produto);
		
	}
	
	
	//Excluir produto
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Map<String, Boolean>> excluir(@PathVariable Long id){
		
		Produto produto = pRep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto nao encontrado: " + id));

		pRep.delete(produto);
		
		
		Map<String, Boolean> resposta = new HashMap<>();
		resposta.put("Produto Excluido: ", Boolean.TRUE);
		return ResponseEntity.ok(resposta);
		
	}
	
	
	//Alterar produto
	@PutMapping("/produtos/{id}")
	public ResponseEntity<Produto> alterar(@PathVariable Long id, @RequestBody Produto produto){
	
		Produto prod = pRep.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto nao encontrado: " + id));

		prod.setId(produto.getId());
		prod.setNome(produto.getNome());
		prod.setQuantidade(produto.getQuantidade());
		
		Produto atualizado = pRep.save(prod);
		return ResponseEntity.ok(atualizado);
		
	}
	

}
