package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class Interval {
    @Getter
    @Setter
    private float gap_to_leader;
    @Getter
    @Setter
    private float interval;

    @Override
    public String toString() {
        return "Interval{" +
                "gap_to_leader=" + gap_to_leader +
                ", interval=" + interval +
                '}';
    }
}
