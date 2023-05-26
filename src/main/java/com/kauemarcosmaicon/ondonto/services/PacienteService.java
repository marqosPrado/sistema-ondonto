package com.kauemarcosmaicon.ondonto.services;

import com.kauemarcosmaicon.ondonto.entity.Paciente;
import com.kauemarcosmaicon.ondonto.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {

    @Autowired
    PacienteRepository pacienteRepository;

    public Paciente save(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    public List<Paciente> listAll() {
        return pacienteRepository.findAll();
    }

    public Optional<Paciente> getById(Long id) {
        return pacienteRepository.findById(id);
    }

    public Optional<Paciente> findById(Long id) {
        return pacienteRepository.findById(id);
    }

    public void delete(Paciente paciente) {
        pacienteRepository.delete(paciente);
    }

    public Object listPacienteById(Long id) {
        return findById(id);
    }
}
