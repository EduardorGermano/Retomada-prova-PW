package com.example.backend.service;

import org.springframework.stereotype.Service;

import com.example.backend.model.Financeiro;

@Service
public class FinanceiroService {
    public Financeiro calcularJuro(Financeiro financeiro){
        Double resultado = financeiro.getValorInicial() + Math.pow((1+financeiro.getTaxaJuro()/100),financeiro.getPrazo());
        financeiro.setValorFinal(resultado);
        return financeiro;
    };
}
