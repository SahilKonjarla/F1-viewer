package org.example.backend.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
public class InfoData {
    @Getter
    @Setter
    private int position;
    @Getter
    @Setter
    private String compound;
    @Getter
    @Setter
    private float s1;
    @Getter
    @Setter
    private float s2;
    @Getter
    @Setter
    private float s3;
    @Getter
    @Setter
    private float laptime;
    @Getter
    @Setter
    private float interval;

    @Override
    public String toString() {
        return "InfoData{" +
                "position=" + position +
                ", compound='" + compound + '\'' +
                ", s1=" + s1 +
                ", s2=" + s2 +
                ", s3=" + s3 +
                ", laptime=" + laptime +
                ", interval=" + interval +
                '}';
    }
}
