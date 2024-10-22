package com.example.backend.model;

import lombok.Data;

@Data
public class Financeiro{
    private int prazo;
    private Double valorInicial;
    private Double valorFinal;
    private Double taxaJuro;
}