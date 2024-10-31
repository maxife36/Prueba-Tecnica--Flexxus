import readline from "node:readline/promises";

type systemOptions = "1" | "2" | "3";

class WorkerSalaryManager {
  private readonly salaries: number[];
  private serviceState: boolean;
  private readonly rl: readline.Interface;
  init : ()=> Promise<void>

  constructor() {
    this.salaries = [];
    this.serviceState = true;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.init = this.salaryInput;
  }

  private async salaryInput() {
    console.log("Ingresar Sueldos de Operarios:");

    try {
      while (this.salaries.length < 5) {
        await this.saveSalary()
      }
    } catch (error) {
      console.error(`Error al leer el dato ingresado: ${error}`);
    } finally {
      while (this.serviceState) {
        const option = (await this.showOptions()) as systemOptions;
        await this.executeOption(option);
      }
      this.rl.close()
      
    }
  }

  private async showOptions() {
    return await this.rl.question(
      `\n\n------------------------\n\nOpciones de Sistema:\n  1 - Agregar otro Operario\n  2 - Imprimir salarios de los operarios\n  3 - Finalizar programa\n\nIngrese el NUMERO de la opción seleccioanda: `
    );
  }

  private async executeOption(option: systemOptions) {
    switch (option) {
      case "1":
        await this.saveSalary()
        break;
      case "2":
        this.showSalaries();
        break;
      case "3":
        this.serviceState = false;
        break;
      default:
        console.log("Eligió una opción no valida");
    }
  }

  private async saveSalary() {
    const workId = this.salaries.length + 1;
    const salary = await this.askSalary(workId);
    let isValidSalay = this.isNumber(salary);

    while (!isValidSalay) {
      console.log("Error -> El Sueldo ingresado debe ser un numero");
      const salary = await this.askSalary(workId);
      isValidSalay = this.isNumber(salary);
    }

    this.salaries.push(Number(salary));
  }

  private async askSalary(workerId: number) {
    return await this.rl.question(`Operario ${workerId}: `);
  }

  private isNumber(strNumber: string) {
    const num = Number(strNumber);
    return !isNaN(num);
  }

  showSalaries() {
    console.log("\n\n------------------------\n\nSueldos de Operarios:");
    this.salaries.forEach((salary, workerId) => {
      console.log(`Operario - ${workerId + 1}: $${salary}`);
    });
    console.log("\n\n------------------------\n\n");
  }
}

const program = new WorkerSalaryManager

program.init()
