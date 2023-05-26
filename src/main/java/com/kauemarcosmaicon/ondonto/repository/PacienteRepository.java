package com.kauemarcosmaicon.ondonto.repository;

import com.kauemarcosmaicon.ondonto.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PacienteRepository extends JpaRepository<Paciente, Long> {
}
