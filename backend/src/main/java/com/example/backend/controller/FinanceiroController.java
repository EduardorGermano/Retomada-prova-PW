package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Financeiro;
import com.example.backend.service.FinanceiroService;

@RequestMapping("/financeiro")
@RestController
public class FinanceiroController {

    @Autowired
    public FinanceiroService financeiroService;

    @PostMapping("/calcula")
    public Financeiro calcularJuro(@RequestBody Financeiro financeiro) {
        return financeiroService.calcularJuro(financeiro);
    }

}
