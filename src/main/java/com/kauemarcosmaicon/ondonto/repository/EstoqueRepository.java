package com.kauemarcosmaicon.ondonto.repository;

import com.kauemarcosmaicon.ondonto.entity.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstoqueRepository  extends JpaRepository<Estoque, Long> {
}
