import tkinter as tk

class InputGUI:
    def __init__(self):
        self.root = tk.Tk()
        self.input_fields = []
        self.values = {}

        for _ in range(16):
            input_field = tk.Entry(self.root)
            self.input_fields.append(input_field)

        self.root.bind("<Control-j>", self.move_next_field)
        self.root.bind("<Control-k>", self.move_prev_field)

        self.button = tk.Button(self.root, text="Save Values", command=self.save_values)

    def move_next_field(self, event):
        current_field = self.root.focus_get()
        if current_field in self.input_fields[:-1]:
            next_field_index = self.input_fields.index(current_field) + 1
            self.input_fields[next_field_index].focus_set()

    def move_prev_field(self, event):
        current_field = self.root.focus_get()
        if current_field in self.input_fields[1:]:
            prev_field_index = self.input_fields.index(current_field) - 1
            self.input_fields[prev_field_index].focus_set()

    def save_values(self):
        for input_field in self.input_fields:
            value = input_field.get()
            self.values[input_field] = value

    def run(self):
        for i, input_field in enumerate(self.input_fields):
            input_field.pack()
        
        self.button.pack()

        self.root.mainloop()

if __name__ == "__main__":
    gui = InputGUI()
    gui.run()