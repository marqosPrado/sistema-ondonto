package com.kauemarcosmaicon.ondonto.controller;

import com.kauemarcosmaicon.ondonto.entity.Paciente;
import com.kauemarcosmaicon.ondonto.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class PacienteController {

    @Autowired
    PacienteService pacienteService;

    @GetMapping("/listar-paciente")
    public ResponseEntity<List<Paciente>> listarPacientes() {
        return ResponseEntity.status(HttpStatus.OK).body(pacienteService.listAll());
    }

    @PostMapping("/cadastro-paciente")
    public ResponseEntity<?> cadastrarPaciente(@RequestBody Paciente paciente) {
        if(paciente.getName().isEmpty() || paciente.getEmail().isEmpty() || paciente.getPhone().isEmpty()) {
            return ResponseEntity.badRequest().body("Campos obrigatórios estão faltando");
        }
        try {
            var response = pacienteService.save(paciente);
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception Error) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Ocorreu um erro durante o cadastro do paciente");
        }
    }

    @DeleteMapping("/listar-paciente/deletar/{id}")
    public ResponseEntity<?> deletetarPaciente(@PathVariable(value = "id") Long id) {
        Optional<Paciente> pacienteId = pacienteService.findById(id);
        if(pacienteId.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente não encontrado");
        }

        pacienteService.delete(pacienteId.get());
        return ResponseEntity.status(HttpStatus.OK).body("Paciente deletado com sucesso.");
    }

    @PutMapping("/listar-paciente/editar/{id}")
    public ResponseEntity<?> editarPaciente(@PathVariable(value = "id") Long id,
                                            @RequestBody Paciente paciente) {
        Optional<Paciente> pacienteId = pacienteService.findById(id);
        if(pacienteId.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente não encontrado");
        }

        var pacienteGet = pacienteId.get();
        pacienteGet.setName(paciente.getName());
        pacienteGet.setPhone(paciente.getPhone());
        pacienteGet.setEmail(paciente.getEmail());

        pacienteService.save(pacienteGet);
        return ResponseEntity.status(HttpStatus.OK).body("Cadastro editado com sucesso.");
    }

    @GetMapping("/listar-paciente/paciente/{id}")
    public ResponseEntity<?> umPaciente(@PathVariable(value = "id") Long id) {
        Optional<Paciente> pacienteId = pacienteService.findById(id);

        if(pacienteId.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Paciente não encontrado");
        }

        return ResponseEntity.status(HttpStatus.OK).body(pacienteService.listPacienteById(id));
    }
}
