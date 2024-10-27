package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Interval {
    @Getter
    @Setter
    private float interval;

    @Override
    public String toString() {
        return "Interval{" +
                ", interval=" + interval +
                '}';
    }
}
