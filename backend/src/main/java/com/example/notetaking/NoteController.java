package com.example.notetaking;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/notes")
public class NoteController {
    private List<Note> notes = new ArrayList<>();

    @PostMapping
    public Note saveNote(@RequestBody Note note) {
        notes.add(note);
        return note;
    }

    @GetMapping
    public List<Note> getNotes() {
        return notes;
    }
}

class Note {
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
