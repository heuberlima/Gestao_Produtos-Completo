package com.ueg.web.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ueg.web.model.Produto;


@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{

}
