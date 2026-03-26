const STORAGE_KEY = "fit-teller-plan";

const steps = [
  {
    id: "basicos",
    title: "Dados básicos",
    description: "Informações iniciais para contextualizar suas recomendações.",
    fields: [
      { name: "name", label: "Nome", type: "text", placeholder: "Seu nome", required: true },
      { name: "age", label: "Idade", type: "number", min: 12, max: 100, required: true },
      { name: "sex", label: "Sexo", type: "select", required: true, options: ["Feminino", "Masculino", "Prefiro não informar"] },
      { name: "height", label: "Altura (cm)", type: "number", min: 120, max: 230, required: true },
      { name: "weight", label: "Peso atual (kg)", type: "number", min: 30, max: 300, required: true },
      { name: "goalWeight", label: "Meta de peso (kg)", type: "number", min: 30, max: 300 },
    ],
  },
  {
    id: "objetivos",
    title: "Objetivos principais",
    description: "Escolha seu foco principal e um foco secundário opcional.",
    fields: [
      { name: "primaryGoal", label: "Foco principal", type: "radio", required: true, options: ["Perda de peso", "Ganho de massa muscular", "Definição muscular", "Melhora do condicionamento físico", "Saúde e bem-estar", "Aumento de força", "Recomposição corporal", "Melhora de mobilidade e resistência"] },
      { name: "secondaryGoal", label: "Foco secundário", type: "select", options: ["", "Perda de peso", "Ganho de massa muscular", "Definição muscular", "Melhora do condicionamento físico", "Saúde e bem-estar", "Aumento de força", "Recomposição corporal", "Melhora de mobilidade e resistência"] },
    ],
  },
  {
    id: "experiencia",
    title: "Nível de experiência",
    description: "Isso ajuda a calibrar volume, intensidade e progressão.",
    fields: [{ name: "experience", label: "Como você se considera hoje?", type: "radio", required: true, options: ["Sedentário", "Iniciante", "Intermediário", "Avançado"] }],
  },
  {
    id: "rotina",
    title: "Rotina e disponibilidade",
    description: "Vamos ajustar a recomendação para caber na sua semana real.",
    fields: [
      { name: "daysPerWeek", label: "Quantos dias por semana pode treinar?", type: "number", min: 1, max: 7, required: true },
      { name: "minutesPerSession", label: "Quanto tempo por treino (minutos)?", type: "number", min: 15, max: 180, required: true },
      { name: "trainingPeriod", label: "Melhor período para treinar", type: "select", required: true, options: ["Manhã", "Tarde", "Noite", "Horário variável"] },
      { name: "workStyle", label: "Tipo de trabalho", type: "select", required: true, options: ["Sentado", "Em pé", "Com esforço físico", "Misto"] },
      { name: "sleepQuality", label: "Qualidade do sono", type: "select", required: true, options: ["Ruim", "Regular", "Boa", "Muito boa"] },
      { name: "sleepHours", label: "Média de horas de sono", type: "number", min: 3, max: 12, required: true },
      { name: "stressLevel", label: "Nível de estresse", type: "select", required: true, options: ["Baixo", "Moderado", "Alto"] },
      { name: "routineStyle", label: "Como é sua rotina?", type: "select", required: true, options: ["Corrida", "Moderada", "Flexível"] },
    ],
  },
  {
    id: "ambiente",
    title: "Ambiente e recursos",
    description: "O plano precisa respeitar onde e como você pretende treinar.",
    fields: [
      { name: "trainingPlace", label: "Onde pretende treinar?", type: "radio", required: true, options: ["Em casa", "Academia", "Ao ar livre", "Híbrido"] },
      { name: "hasEquipment", label: "Possui equipamentos em casa?", type: "select", required: true, options: ["Não", "Sim, básicos", "Sim, variados"] },
      { name: "equipmentList", label: "Quais equipamentos tem disponíveis?", type: "text", placeholder: "Ex.: halteres, elásticos, esteira, barra, bicicleta" },
      { name: "modalities", label: "Preferência de modalidades", type: "checkbox", required: true, options: ["Musculação", "Funcional", "Cardio", "HIIT", "Caminhada", "Corrida", "Mobilidade", "Treino misto"] },
    ],
  },
  {
    id: "limitacoes",
    title: "Restrições e limitações",
    description: "Quando existe alguma limitação, a prioridade é segurança e progressão cautelosa.",
    fields: [
      { name: "frequentPain", label: "Possui dores frequentes?", type: "select", required: true, options: ["Não", "Sim"] },
      { name: "injuries", label: "Possui lesões?", type: "text", placeholder: "Se houver, descreva brevemente" },
      { name: "jointRestrictions", label: "Possui restrições articulares?", type: "text", placeholder: "Ex.: limitação no ombro, tornozelo, punho" },
      { name: "discomfortAreas", label: "Sente desconforto em quais regiões?", type: "checkbox", options: ["Nenhuma", "Joelho", "Coluna", "Ombro", "Quadril", "Tornozelo"] },
      { name: "medicalFollowUp", label: "Faz acompanhamento médico?", type: "select", required: true, options: ["Não", "Sim"] },
      { name: "medications", label: "Usa medicamentos que afetam peso, disposição ou metabolismo?", type: "text", placeholder: "Se houver, descreva de forma geral" },
      { name: "exerciseLimitations", label: "Existe alguma limitação que impeça certos exercícios?", type: "textarea", placeholder: "Conte o que deve ser evitado ou adaptado" },
    ],
  },
  {
    id: "alimentacao",
    title: "Hábitos alimentares",
    description: "Essas respostas ajudam a organizar sugestões alimentares mais práticas e coerentes.",
    fields: [
      { name: "mealsPerDay", label: "Quantidade de refeições por dia", type: "number", min: 1, max: 8, required: true },
      { name: "mealTimes", label: "Horários aproximados", type: "text", placeholder: "Ex.: 7h, 12h30, 16h, 20h" },
      { name: "foodPreference", label: "Preferência alimentar", type: "text", placeholder: "Ex.: onívoro, vegetariano, low carb, sem preferência" },
      { name: "dietRestrictions", label: "Restrições alimentares", type: "text", placeholder: "Ex.: sem lactose, sem glúten" },
      { name: "intolerances", label: "Intolerâncias", type: "text", placeholder: "Se houver, descreva" },
      { name: "allergies", label: "Alergias", type: "text", placeholder: "Se houver, descreva" },
      { name: "waterIntake", label: "Consumo de água por dia (litros)", type: "number", min: 0, max: 10, step: "0.1", required: true },
      { name: "biggestFoodChallenge", label: "Maior dificuldade hoje", type: "select", required: true, options: ["Controlar fome", "Comer fora de hora", "Falta de rotina", "Comer pouco", "Consumir proteína suficiente", "Excesso de doces", "Excesso de industrializados"] },
      { name: "foodGoal", label: "Objetivo alimentar", type: "select", required: true, options: ["Emagrecer", "Ganhar massa", "Manter peso", "Melhorar qualidade alimentar"] },
    ],
  },
  {
    id: "preferencias",
    title: "Preferências pessoais",
    description: "Quanto mais o plano combinar com você, maiores as chances de consistência.",
    fields: [
      { name: "likedExercises", label: "Exercícios que gosta", type: "text", placeholder: "Ex.: caminhada, musculação, bicicleta" },
      { name: "dislikedExercises", label: "Exercícios que não gosta", type: "text", placeholder: "Ex.: corrida, burpee, saltos" },
      { name: "likedFoods", label: "Alimentos que gosta", type: "text", placeholder: "Ex.: ovos, arroz, iogurte, frango, frutas" },
      { name: "dislikedFoods", label: "Alimentos que não gosta", type: "text", placeholder: "Ex.: peixe, aveia, salada crua" },
      { name: "planStyle", label: "Formato desejado do plano", type: "radio", required: true, options: ["Mais simples", "Mais detalhado", "Mais flexível", "Mais disciplinado"] },
      { name: "additionalNotes", label: "Observações adicionais", type: "textarea", placeholder: "Conte qualquer contexto importante para melhorar a recomendação" },
    ],
  },
];

const form = document.getElementById("fit-form");
const stepContainer = document.getElementById("step-container");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const stepIndicators = document.getElementById("step-indicators");
const prevButton = document.getElementById("prev-step");
const nextButton = document.getElementById("next-step");
const submitButton = document.getElementById("submit-form");
const resultSection = document.getElementById("result-section");
const resultContent = document.getElementById("result-content");
const restartButton = document.getElementById("restart-button");
const saveButton = document.getElementById("save-button");
const printButton = document.getElementById("print-button");
let currentStep = 0;

document.querySelectorAll("[data-scroll-target]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scrollTarget)?.scrollIntoView({ behavior: "smooth" });
  });
});

function readStorage() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function getStoredValue(fieldName) {
  return readStorage()[fieldName] ?? "";
}

function renderIndicators() {
  stepIndicators.innerHTML = steps
    .map((step, index) => `<li class="${index === currentStep ? "active" : index < currentStep ? "completed" : ""}">${step.title}</li>`)
    .join("");
}

function fieldTemplate(field) {
  const value = getStoredValue(field.name);
  const required = field.required ? "required" : "";

  if (field.type === "select") {
    return `
      <div class="field ${field.full ? "full" : ""}">
        <label>
          <span>${field.label}</span>
          <select name="${field.name}" ${required}>
            ${field.options
              .map((option) => `<option value="${option || ""}" ${option === value ? "selected" : ""}>${option || "Selecione"}</option>`)
              .join("")}
          </select>
        </label>
      </div>`;
  }

  if (field.type === "radio") {
    return `
      <div class="field full">
        <label><span>${field.label}</span></label>
        <div class="choice-grid">
          ${field.options
            .map((option) => `<label class="choice-pill"><input type="radio" name="${field.name}" value="${option}" ${option === value ? "checked" : ""} ${required} /><span>${option}</span></label>`)
            .join("")}
        </div>
      </div>`;
  }

  if (field.type === "checkbox") {
    const values = Array.isArray(value) ? value : [];
    return `
      <div class="field full">
        <label><span>${field.label}</span></label>
        <div class="checkbox-grid">
          ${field.options
            .map((option) => `<label class="checkbox-card"><input type="checkbox" name="${field.name}" value="${option}" ${values.includes(option) ? "checked" : ""} /><span>${option}</span></label>`)
            .join("")}
        </div>
      </div>`;
  }

  if (field.type === "textarea") {
    return `
      <div class="field full">
        <label>
          <span>${field.label}</span>
          <textarea name="${field.name}" placeholder="${field.placeholder || ""}" ${required}>${value || ""}</textarea>
        </label>
      </div>`;
  }

  return `
    <div class="field ${field.full ? "full" : ""}">
      <label>
        <span>${field.label}</span>
        <input type="${field.type}" name="${field.name}" value="${value || ""}" placeholder="${field.placeholder || ""}" min="${field.min ?? ""}" max="${field.max ?? ""}" step="${field.step ?? ""}" ${required} />
      </label>
    </div>`;
}

function renderStep() {
  const step = steps[currentStep];
  stepContainer.innerHTML = `
    <section class="step-content">
      <div class="step-header">
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>
      <div class="input-grid ${step.fields.length > 6 ? "three" : ""}">
        ${step.fields.map(fieldTemplate).join("")}
      </div>
    </section>
  `;

  progressText.textContent = `Etapa ${currentStep + 1} de ${steps.length}`;
  progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
  prevButton.classList.toggle("hidden", currentStep === 0);
  nextButton.classList.toggle("hidden", currentStep === steps.length - 1);
  submitButton.classList.toggle("hidden", currentStep !== steps.length - 1);
  renderIndicators();
}

function collectFormData() {
  const formData = new FormData(form);
  const data = {};
  steps.forEach((step) => {
    step.fields.forEach((field) => {
      data[field.name] = field.type === "checkbox" ? formData.getAll(field.name) : formData.get(field.name)?.toString().trim() || "";
    });
  });
  return data;
}

function persistCurrentData() {
  const data = collectFormData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  return data;
}

function validateStep() {
  const currentFields = stepContainer.querySelectorAll("input, select, textarea");
  for (const field of currentFields) {
    if (field.type === "radio") {
      const group = stepContainer.querySelectorAll(`input[name="${field.name}"]`);
      if (field.required && !Array.from(group).some((item) => item.checked)) {
        alert("Preencha os campos obrigatórios antes de avançar.");
        return false;
      }
      continue;
    }
    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  const step = steps[currentStep];
  for (const field of step.fields.filter((item) => item.type === "checkbox" && item.required)) {
    if (!stepContainer.querySelectorAll(`input[name="${field.name}"]:checked`).length) {
      alert("Selecione pelo menos uma opção nas preferências obrigatórias.");
      return false;
    }
  }

  persistCurrentData();
  return true;
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Referência de baixo peso";
  if (bmi < 25) return "Referência de peso adequado";
  if (bmi < 30) return "Referência de sobrepeso";
  return "Referência de IMC elevado";
}

function inferProfile(data, bmi) {
  if (data.experience === "Avançado") return "Perfil avançado com boa base para estratégia estruturada";
  if (data.experience === "Intermediário") return "Perfil em evolução, com espaço para refinamento e consistência";
  if (data.experience === "Sedentário") return "Perfil em fase inicial, com necessidade de adaptação progressiva";
  if (bmi >= 30) return "Perfil em reorganização física, com foco em segurança e constância";
  return "Perfil iniciante com potencial de progresso gradual e sustentável";
}

function buildTrainingRecommendation(data) {
  const days = Number(data.daysPerWeek);
  const minutes = Number(data.minutesPerSession);
  const limited = data.frequentPain === "Sim" || (data.discomfortAreas || []).some((item) => item !== "Nenhuma") || data.injuries || data.exerciseLimitations;
  const lowTime = minutes <= 40;
  const lowerExperience = ["Sedentário", "Iniciante"].includes(data.experience);

  const recommendation = {
    frequency: `${Math.max(2, Math.min(days, 6))} dias por semana`,
    duration: `${minutes} minutos por sessão`,
    type: "Treino misto com base em força, condicionamento e mobilidade",
    split: "Divisão de corpo inteiro com alternância de estímulos",
    intensity: lowerExperience ? "Baixa a moderada, com prioridade para técnica" : "Moderada, subindo conforme adaptação",
    volume: lowerExperience ? "Volume enxuto e sustentável, sem excesso inicial" : "Volume moderado com organização semanal",
    progression: "Aumentar carga, repetições ou complexidade aos poucos, apenas quando a execução estiver consistente.",
    restDays: days >= 5 ? "1 a 2 dias de descanso ou recuperação ativa" : "Dias alternados de descanso entre estímulos principais",
    complementaryFocus: "Mobilidade, sono e hidratação para sustentar regularidade",
    rationale: "A recomendação prioriza aderência, progressão segura e compatibilidade com sua rotina.",
  };

  if (data.primaryGoal === "Perda de peso") {
    recommendation.type = lowTime ? "Sessões eficientes com força + cardio de baixo impacto" : "Treino combinado com força, cardio e gasto calórico consistente";
    recommendation.split = days <= 3 ? "Treinos de corpo inteiro com bloco cardiovascular ao final" : "Alternância entre força total, cardio e mobilidade";
    recommendation.intensity = limited ? "Baixa a moderada, com impacto controlado" : "Moderada com progressão gradual";
    recommendation.complementaryFocus = "Cardio moderado, passos diários e consistência semanal";
    recommendation.rationale = "Para perda de peso, a prioridade é constância, preservação muscular e gasto energético realista.";
  }

  if (data.primaryGoal === "Ganho de massa muscular") {
    recommendation.type = "Treino de musculação estruturado com foco em padrões básicos e progressão";
    recommendation.split = days <= 3 ? "Corpo inteiro 3x por semana" : days === 4 ? "Superior / inferior" : "Divisão por grupamentos com reforço nos pontos prioritários";
    recommendation.intensity = lowerExperience ? "Moderada, dominando técnica antes de intensificar" : "Moderada a alta, com esforço controlado";
    recommendation.volume = lowerExperience ? "Volume inicial controlado, priorizando execução" : "Volume moderado a alto conforme recuperação";
    recommendation.complementaryFocus = "Recuperação muscular, ingestão proteica adequada e progressão objetiva";
    recommendation.rationale = "Para massa muscular, a chave é estímulo progressivo, boa execução e regularidade semanal.";
  }

  if (data.primaryGoal === "Aumento de força") {
    recommendation.type = "Treino com ênfase em exercícios multiarticulares e controle de carga";
    recommendation.split = days <= 3 ? "Corpo inteiro com foco em padrões principais" : "Divisão superior / inferior com reforço técnico";
    recommendation.intensity = lowerExperience ? "Moderada e técnica" : "Moderada a alta com descanso adequado";
    recommendation.volume = "Volume controlado para preservar qualidade e recuperação";
    recommendation.complementaryFocus = "Mobilidade, estabilidade e recuperação neural";
  }

  if (data.primaryGoal === "Melhora de mobilidade e resistência") {
    recommendation.type = "Sessões híbridas com mobilidade, estabilidade, cardio leve e força de base";
    recommendation.split = "Alternância entre mobilidade dinâmica, circuitos leves e cardio moderado";
    recommendation.intensity = "Baixa a moderada";
    recommendation.complementaryFocus = "Alongamento ativo, controle respiratório e recuperação";
  }

  if (data.primaryGoal === "Saúde e bem-estar") {
    recommendation.type = "Treino global com baixo atrito, focado em saúde geral e continuidade";
    recommendation.split = "Força geral, cardio leve e mobilidade distribuídos na semana";
    recommendation.intensity = "Baixa a moderada, priorizando sensação de bem-estar";
  }

  if (data.trainingPlace === "Em casa" && !(data.modalities || []).includes("Musculação")) {
    recommendation.type += " adaptado para casa";
    recommendation.split += ", usando exercícios com peso corporal ou equipamentos básicos";
  }

  if (limited) {
    recommendation.intensity = "Baixa a moderada com foco em controle de movimento";
    recommendation.volume = "Volume conservador no início, evitando picos de fadiga";
    recommendation.progression = "Progredir apenas se não houver aumento de dor, desconforto relevante ou piora funcional.";
    recommendation.rationale = "Como existem limitações relatadas, a prioridade passa a ser adaptação gradual, técnica e segurança.";
  }

  if ((data.discomfortAreas || []).includes("Joelho")) {
    recommendation.complementaryFocus += ". Priorize variações de baixo impacto e fortalecimento geral antes de movimentos agressivos ao joelho";
  }
  if ((data.discomfortAreas || []).includes("Coluna")) {
    recommendation.complementaryFocus += ". Reforce estabilidade de core e evite progressões bruscas em cargas compressivas";
  }
  if (lowTime) {
    recommendation.volume = "Volume compacto, com exercícios de maior retorno por minuto investido";
  }

  return recommendation;
}

function buildWeeklyStructure(data, training) {
  const days = Math.max(2, Math.min(Number(data.daysPerWeek), 7));
  const limited = data.frequentPain === "Sim" || (data.discomfortAreas || []).includes("Joelho") || (data.discomfortAreas || []).includes("Coluna");

  const map = {
    2: ["Dia 1: treino global com foco em força básica e mobilidade", "Dia 2: cardio moderado + estabilidade + alongamento ativo", "Demais dias: caminhadas leves e recuperação"],
    3: [
      data.primaryGoal === "Ganho de massa muscular" ? "Segunda: corpo inteiro com foco em força e hipertrofia base" : "Segunda: treino global com foco principal do objetivo",
      limited ? "Quarta: cardio de baixo impacto + mobilidade + core" : "Quarta: cardio moderado + complemento técnico",
      data.primaryGoal === "Perda de peso" ? "Sexta: treino de força + finalização cardiovascular curta" : "Sexta: treino global com progressão leve",
      "Demais dias: descanso ativo ou caminhada leve",
    ],
    4: ["Segunda: membros inferiores ou padrão dominante de pernas", "Terça: membros superiores + core", "Quinta: cardio moderado + mobilidade", "Sexta: treino completo com foco complementar", "Fim de semana: descanso ou atividade leve"],
    5: ["Segunda: parte inferior", "Terça: parte superior", "Quarta: cardio ou condicionamento", "Quinta: parte inferior com menor volume", "Sexta: parte superior + complementares", "Fim de semana: recuperação ativa e mobilidade"],
    6: ["Segunda: estímulo principal 1", "Terça: estímulo principal 2", "Quarta: cardio + mobilidade", "Quinta: estímulo principal 3", "Sexta: estímulo principal 4", "Sábado: recuperação ativa ou cardio leve", "Domingo: descanso"],
    7: ["Segunda a sexta: rotação entre força, cardio e mobilidade", "Sábado: sessão leve de recuperação", "Domingo: atividade muito leve ou pausa completa"],
  };

  return [...map[days], `Consistência sugerida: mantenha ${training.frequency.toLowerCase()} com pelo menos 80% de aderência semanal antes de aumentar a exigência.`];
}

function buildMeals(data) {
  const meals = {
    organization: "Distribua refeições ao longo do dia de forma previsível, com proteína, fibra, carboidrato adequado ao contexto e hidratação constante.",
    breakfast: "Ovos com fruta e aveia, iogurte com granola e frutas, ou sanduíche com proteína magra.",
    lunch: "Base com proteína principal, arroz ou outra fonte de carboidrato, legumes e verduras.",
    dinner: "Refeição completa, com boa saciedade e porções ajustadas ao objetivo e ao horário.",
    snacks: "Iogurte, fruta, mix de castanhas, sanduíche simples, queijo magro ou shake prático.",
    preWorkout: "Refeição leve com carboidrato de fácil digestão e pequena porção de proteína.",
    postWorkout: "Proteína com carboidrato para sustentar recuperação, sem necessidade de exagero.",
    hydration: `Seu relato atual indica cerca de ${data.waterIntake}L por dia. Busque regularidade e ajuste para mais se o clima, suor e rotina pedirem.`,
    consistency: "Quanto mais repetível for a rotina alimentar, maior a chance de manter o plano sem desgaste mental.",
  };

  if (data.foodGoal === "Emagrecer") {
    meals.organization = "Priorize refeições saciantes, com proteína presente e volume alimentar inteligente para reduzir beliscos desnecessários.";
    meals.dinner = "Jantar com boa saciedade, evitando longos períodos sem comer antes da noite.";
    meals.consistency = "Evite compensações extremas. Melhor um padrão bom e constante do que ciclos de restrição e excesso.";
  }
  if (data.foodGoal === "Ganhar massa") {
    meals.organization = "Organize refeições suficientes para cobrir energia diária e proteína distribuída ao longo do dia.";
    meals.snacks = "Lanches com proteína e energia, como iogurte com fruta, sanduíche com queijo e peito de peru, ou vitamina.";
    meals.postWorkout = "Refeição com proteína de qualidade e carboidrato para favorecer recuperação e continuidade do treino.";
  }
  if (data.foodGoal === "Melhorar qualidade alimentar") {
    meals.organization = "Ajuste sua rotina com refeições mais previsíveis, menos ultraprocessados e maior presença de comida de verdade.";
  }
  if (data.biggestFoodChallenge === "Comer fora de hora") {
    meals.snacks = "Planeje 1 ou 2 lanches estratégicos para evitar ataques de fome e decisões impulsivas.";
  }
  if (data.biggestFoodChallenge === "Controlar fome") {
    meals.dinner = "Monte jantar com proteína, vegetais e carboidrato na medida para aumentar saciedade.";
  }
  if (data.biggestFoodChallenge === "Consumir proteína suficiente") {
    meals.organization += " Em cada refeição principal, inclua uma fonte clara de proteína.";
  }
  if (data.biggestFoodChallenge === "Excesso de doces") {
    meals.consistency = "Não tente zerar tudo de uma vez. Estruture refeições principais melhores e reduza gatilhos de forma gradual.";
  }
  if (data.routineStyle === "Corrida") {
    meals.breakfast = "Opções rápidas e sustentáveis, como overnight oats, iogurte com fruta, sanduíche ou omelete simples.";
    meals.lunch = "Marmita simples ou combinação prática que você consiga repetir sem atrito.";
  }

  meals.personalization = `Considere priorizar alimentos que você gosta, como ${data.likedFoods || "opções simples e conhecidas"}, e reduzir atritos com itens que tende a evitar, como ${data.dislikedFoods || "alimentos pouco práticos para você"}.`;
  return meals;
}

function buildWarnings(data, bmi) {
  const warnings = [
    "As informações apresentadas pelo Fit Teller têm caráter informativo e educacional.",
    "Métricas automáticas são apenas referências iniciais e não substituem avaliação profissional individualizada.",
    "As sugestões de refeições são apenas recomendações gerais e não equivalem a uma prescrição nutricional personalizada.",
  ];
  if (data.frequentPain === "Sim" || data.injuries || data.exerciseLimitations) warnings.push("Como você relatou dores, lesões ou limitações, qualquer aumento de intensidade deve acontecer com cautela e, idealmente, com avaliação profissional.");
  if (data.medicalFollowUp === "Sim" || data.medications) warnings.push("Como existe acompanhamento médico ou uso de medicamentos relatado, vale alinhar mudanças relevantes com um profissional habilitado.");
  if (bmi >= 30 || bmi < 18.5) warnings.push("Sua referência automática de IMC merece leitura cuidadosa e nunca deve ser interpretada isoladamente.");
  if ((data.discomfortAreas || []).includes("Joelho")) warnings.push("Com desconforto no joelho, prefira baixo impacto e procure avaliação se a dor persistir, piorar ou limitar movimentos básicos.");
  return warnings;
}

function buildResult(data) {
  const heightMeters = Number(data.height) / 100;
  const weight = Number(data.weight);
  const bmi = weight / (heightMeters * heightMeters);
  const training = buildTrainingRecommendation(data);
  const weeklyStructure = buildWeeklyStructure(data, training);
  const meals = buildMeals(data);
  const warnings = buildWarnings(data, bmi);
  const limitations = [
    data.frequentPain === "Sim" ? "Dores frequentes relatadas" : "",
    data.injuries,
    data.jointRestrictions,
    data.exerciseLimitations,
    (data.discomfortAreas || []).filter((item) => item !== "Nenhuma").join(", "),
  ].filter(Boolean).join(" | ") || "Nenhuma limitação relevante informada";

  const summaryItems = [
    `Objetivo principal: ${data.primaryGoal}`,
    `Foco secundário: ${data.secondaryGoal || "Não informado"}`,
    `Nível atual: ${data.experience}`,
    `Disponibilidade: ${data.daysPerWeek} dias por semana`,
    `Sessões médias: ${data.minutesPerSession} min`,
    `Ambiente de treino: ${data.trainingPlace}`,
    `Foco alimentar: ${data.foodGoal}`,
    `Plano desejado: ${data.planStyle}`,
  ];

  const goalComparison = data.goalWeight ? `${Number(data.goalWeight) > weight ? "Meta acima do peso atual" : Number(data.goalWeight) < weight ? "Meta abaixo do peso atual" : "Meta alinhada ao peso atual"}` : "Meta de peso não informada";

  resultContent.innerHTML = `
    <div class="result-grid">
      <article class="result-card">
        <h3>Resumo do perfil</h3>
        <div class="summary-grid">${summaryItems.map((item) => `<div class="summary-chip">${item}</div>`).join("")}</div>
        <div class="insight-grid" style="margin-top:16px;">
          <div class="stat-card"><strong>${bmi.toFixed(1)}</strong><span>IMC de referência</span><p>Métricas automáticas são apenas referências iniciais e não substituem avaliação profissional individualizada.</p></div>
          <div class="stat-card"><strong>${bmiCategory(bmi)}</strong><span>Leitura cuidadosa</span><p>Interpretação meramente informativa, sem caráter diagnóstico.</p></div>
          <div class="stat-card"><strong>${inferProfile(data, bmi)}</strong><span>Classificação de perfil</span><p>Descrição cuidadosa e não ofensiva com base na sua fase atual.</p></div>
        </div>
      </article>

      <article class="result-card half">
        <h3>Comparativo atual x meta</h3>
        <div class="list-block">
          <p><strong>Peso atual:</strong> ${data.weight} kg</p>
          <p><strong>Meta de peso:</strong> ${data.goalWeight || "Não informada"}</p>
          <p><strong>Leitura inicial:</strong> ${goalComparison}</p>
          <p><strong>Principais limitações:</strong> ${limitations}</p>
        </div>
      </article>

      <article class="result-card half">
        <h3>Observações automáticas</h3>
        <div class="list-block">
          <ul>
            <li>Rotina ${data.routineStyle.toLowerCase()} com treino preferencial no período da ${data.trainingPeriod.toLowerCase()}.</li>
            <li>Sono ${data.sleepQuality.toLowerCase()} com média de ${data.sleepHours} horas por noite.</li>
            <li>Nível de estresse ${data.stressLevel.toLowerCase()}, o que influencia recuperação e constância.</li>
            <li>Preferência de treino: ${(data.modalities || []).join(", ") || "não informada"}.</li>
            <li>Preferências pessoais ajudam a aumentar aderência e reduzir atrito do plano.</li>
          </ul>
        </div>
      </article>

      <article class="result-card">
        <h3>Recomendação de treino</h3>
        <div class="stat-grid">
          <div class="stat-card"><strong>${training.frequency}</strong><span>Frequência ideal</span></div>
          <div class="stat-card"><strong>${training.duration}</strong><span>Duração média</span></div>
          <div class="stat-card"><strong>${training.intensity}</strong><span>Intensidade inicial</span></div>
        </div>
        <div class="list-block" style="margin-top:16px;">
          <p><strong>Tipo recomendado:</strong> ${training.type}</p>
          <p><strong>Divisão sugerida:</strong> ${training.split}</p>
          <p><strong>Volume recomendado:</strong> ${training.volume}</p>
          <p><strong>Progressão:</strong> ${training.progression}</p>
          <p><strong>Descanso:</strong> ${training.restDays}</p>
          <p><strong>Foco complementar:</strong> ${training.complementaryFocus}</p>
          <p><strong>Racional:</strong> ${training.rationale}</p>
        </div>
      </article>

      <article class="weekly-card half">
        <h3>Estrutura semanal sugerida</h3>
        <div class="weekly-list">${weeklyStructure.map((item) => {
          const parts = item.split(":");
          return `<div class="weekly-item"><strong>${parts[0]}</strong>${parts.length > 1 ? parts.slice(1).join(":").trim() : item}</div>`;
        }).join("")}</div>
      </article>

      <article class="weekly-card half">
        <h3>Consistência semanal</h3>
        <div class="list-block">
          <p><strong>Meta de aderência:</strong> mantenha o plano por 3 a 4 semanas antes de revisar volume e intensidade.</p>
          <p><strong>Estratégia prática:</strong> escolha horários estáveis, deixe roupa ou mochila preparada e reduza barreiras logísticas.</p>
          <p><strong>Quando ajustar:</strong> se o treino estiver fácil demais sem desconforto, aumente gradualmente; se estiver pesado demais, reduza volume antes de desistir.</p>
          <p><strong>Formato escolhido:</strong> ${data.planStyle}, então o plano prioriza um nível de estrutura compatível com sua preferência.</p>
        </div>
      </article>

      <article class="meal-card">
        <h3>Refeições recomendadas</h3>
        <p>As sugestões abaixo são gerais, iniciais e baseadas no seu objetivo e hábitos informados.</p>
        <div class="meal-grid">
          <div class="meal-item"><strong>Organização diária</strong>${meals.organization}</div>
          <div class="meal-item"><strong>Café da manhã</strong>${meals.breakfast}</div>
          <div class="meal-item"><strong>Almoço</strong>${meals.lunch}</div>
          <div class="meal-item"><strong>Jantar</strong>${meals.dinner}</div>
          <div class="meal-item"><strong>Lanches intermediários</strong>${meals.snacks}</div>
          <div class="meal-item"><strong>Pré-treino</strong>${meals.preWorkout}</div>
          <div class="meal-item"><strong>Pós-treino</strong>${meals.postWorkout}</div>
          <div class="meal-item"><strong>Hidratação</strong>${meals.hydration}</div>
          <div class="meal-item"><strong>Consistência alimentar</strong>${meals.consistency}</div>
        </div>
        <div class="notice-card compact" style="margin-top:16px;">
          <h3>Personalização alimentar</h3>
          <p>${meals.personalization}</p>
          <p>As sugestões de refeições são apenas recomendações gerais e não equivalem a uma prescrição nutricional personalizada.</p>
        </div>
      </article>

      <article class="result-card third">
        <h3>Preferências consideradas</h3>
        <div class="list-block">
          <p><strong>Exercícios que gosta:</strong> ${data.likedExercises || "Não informado"}</p>
          <p><strong>Exercícios que não gosta:</strong> ${data.dislikedExercises || "Não informado"}</p>
          <p><strong>Alimentos que gosta:</strong> ${data.likedFoods || "Não informado"}</p>
          <p><strong>Alimentos que não gosta:</strong> ${data.dislikedFoods || "Não informado"}</p>
        </div>
      </article>

      <article class="result-card third">
        <h3>Recursos e contexto</h3>
        <div class="list-block">
          <p><strong>Ambiente:</strong> ${data.trainingPlace}</p>
          <p><strong>Equipamentos:</strong> ${data.hasEquipment}</p>
          <p><strong>Lista informada:</strong> ${data.equipmentList || "Nenhum detalhe adicional"}</p>
          <p><strong>Trabalho:</strong> ${data.workStyle}</p>
        </div>
      </article>

      <article class="result-card third">
        <h3>Observações extras</h3>
        <div class="list-block">
          <p><strong>Preferência alimentar:</strong> ${data.foodPreference || "Não informado"}</p>
          <p><strong>Restrições:</strong> ${data.dietRestrictions || "Não informado"}</p>
          <p><strong>Intolerâncias / alergias:</strong> ${data.intolerances || "Nenhuma"}${data.allergies ? ` / ${data.allergies}` : ""}</p>
          <p><strong>Notas adicionais:</strong> ${data.additionalNotes || "Nenhuma observação adicional registrada"}</p>
        </div>
      </article>

      <article class="result-card">
        <h3>Alertas e cuidados importantes</h3>
        <div class="warning-list">${warnings.map((warning) => `<div class="warning-item"><strong>Atenção</strong>${warning}</div>`).join("")}</div>
      </article>
    </div>
  `;

  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

prevButton.addEventListener("click", () => {
  persistCurrentData();
  currentStep = Math.max(0, currentStep - 1);
  renderStep();
});

nextButton.addEventListener("click", () => {
  if (!validateStep()) return;
  currentStep = Math.min(steps.length - 1, currentStep + 1);
  renderStep();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateStep()) return;
  const data = collectFormData();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  buildResult(data);
});

restartButton.addEventListener("click", () => {
  currentStep = 0;
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  resultSection.classList.add("hidden");
  renderStep();
  document.getElementById("avaliacao").scrollIntoView({ behavior: "smooth" });
});

saveButton.addEventListener("click", () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collectFormData()));
  alert("Plano salvo neste navegador para você continuar depois.");
});

printButton.addEventListener("click", async () => {
  const originalText = printButton.textContent;
  printButton.disabled = true;
  printButton.textContent = "Gerando PDF...";

  try {
    if (window.html2pdf) {
      const safeName = (collectFormData().name || "usuario").toLowerCase().replace(/\s+/g, "-");
      const exportNode = resultSection.cloneNode(true);
      exportNode.classList.remove("hidden");

      const options = {
        margin: [10, 10, 10, 10],
        filename: `fit-teller-plano-${safeName}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        pagebreak: { mode: ["css", "legacy"] },
      };

      await window.html2pdf().set(options).from(exportNode).save();
      return;
    }

    window.print();
  } catch (error) {
    console.error("Falha ao gerar PDF:", error);
    alert("Não foi possível gerar o PDF automaticamente. Tente novamente ou use a opção de impressão do navegador.");
  } finally {
    printButton.disabled = false;
    printButton.textContent = originalText;
  }
});

function initialize() {
  renderStep();
  const saved = readStorage();
  if (saved.name && saved.primaryGoal && saved.experience) {
    buildResult(saved);
  }
}

initialize();
