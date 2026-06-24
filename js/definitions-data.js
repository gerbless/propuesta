// js/definitions-data.js — Fuente única de verdad para todos los conceptos técnicos

const DEFINITIONS = {
  'databricks': {
    id:'databricks', title:'Databricks', subtitle:'Plataforma Unificada de Datos e IA',
    category:'Plataforma de Datos', categoryColor:'#2563eb', icon:'⚡',
    definition:`Databricks es una plataforma unificada de análisis de datos e inteligencia artificial basada en la nube. Fue fundada en 2013 por los creadores de Apache Spark y ha evolucionado para convertirse en una de las plataformas de datos más adoptadas a nivel empresarial.

La plataforma integra en un solo entorno las capacidades de ingeniería de datos, ciencia de datos, aprendizaje automático y análisis de negocios, permitiendo a los equipos colaborar sobre los mismos datos y herramientas sin fragmentación.`,
    why_matters:`Databricks resuelve uno de los mayores desafíos organizacionales: la fragmentación de herramientas. Al unificar el procesamiento batch, streaming, ML y consultas SQL en una sola plataforma, reduce la complejidad operativa y el costo total de propiedad. Permite escalar desde proyectos pequeños hasta petabytes de datos sin cambiar de tecnología.`,
    in_proposal:`La organización ya cuenta con Databricks como base tecnológica. Esta propuesta aprovecha esa inversión existente para construir sobre ella capacidades de DataOps, gobierno centralizado mediante Unity Catalog, automatización de pipelines y mejores prácticas de ingeniería, sin necesidad de migrar a nuevas plataformas.`,
    key_concepts:[
      {term:'Workspace',def:'Entorno colaborativo donde equipos comparten notebooks, clusters y datos'},
      {term:'Delta Lake',def:'Capa de almacenamiento open source que garantiza confiabilidad ACID sobre los datos'},
      {term:'Databricks Workflows',def:'Orquestador nativo para automatizar y programar pipelines de datos'},
      {term:'Unity Catalog',def:'Solución unificada de gobierno de datos integrada en la plataforma'},
      {term:'Databricks Assistant',def:'Asistente de IA nativo para escribir código SQL, Python y documentar datos'},
    ],
    related:['unity-catalog','pipeline','data-products','dataops','inteligencia-artificial']
  },
  'dataops': {
    id:'dataops', title:'DataOps', subtitle:'Metodología Ágil para Operaciones de Datos',
    category:'Metodología', categoryColor:'#0d9488', icon:'🔄',
    definition:`DataOps es una metodología colaborativa de gestión de datos que combina los principios del desarrollo ágil, DevOps y la estadística de procesos para mejorar la calidad, velocidad y colaboración en el trabajo con datos.

El término surge como respuesta a los ciclos largos y propensos a errores que caracterizaban la entrega de datos en las organizaciones tradicionales. DataOps trata los pipelines de datos como código, aplica automatización end-to-end y mide resultados con métricas concretas.`,
    why_matters:`Las organizaciones que implementan DataOps reportan reducciones de 30-60% en el tiempo para entregar nuevos análisis al negocio, junto con una mejora sustancial en la calidad de los datos. DataOps transforma la ingeniería de datos de una disciplina reactiva ("apagando incendios") a una disciplina proactiva y orientada al valor.`,
    in_proposal:`La transformación propuesta lleva la organización desde un modelo reactivo hacia una organización DataOps madura. Las Fases 3 (automatización), 5 (observabilidad) y 6 (IA para productividad) son directamente los pilares de DataOps aplicados a la realidad del equipo actual.`,
    key_concepts:[
      {term:'Agilidad',def:'Ciclos cortos de entrega con validación continua del valor aportado al negocio'},
      {term:'Automatización',def:'Eliminación sistemática de tareas manuales repetitivas en el ciclo de vida del dato'},
      {term:'Observabilidad',def:'Visibilidad en tiempo real del estado y calidad de los pipelines y datos'},
      {term:'Colaboración',def:'Trabajo conjunto entre ingenieros de datos, analistas y equipos de negocio'},
      {term:'Mejora continua',def:'Ciclos regulares de retrospectiva y optimización de procesos de trabajo'},
    ],
    related:['pipeline','cicd','observabilidad','data-quality','time-to-market']
  },
  'unity-catalog': {
    id:'unity-catalog', title:'Unity Catalog', subtitle:'Gobierno Unificado de Datos en Databricks',
    category:'Gobierno de Datos', categoryColor:'#7c3aed', icon:'🗂️',
    definition:`Unity Catalog es la solución de gobernanza unificada de Databricks para datos y activos de inteligencia artificial. Provee un punto centralizado para gestionar el acceso, la seguridad, la auditoría y el linaje de todos los activos de datos dentro de un entorno Databricks.

Organiza los activos en un modelo de tres niveles: Catalog → Schema → Table/View/Function. Una sola política de acceso aplica consistentemente a través de todos los workspaces de la organización.`,
    why_matters:`Sin un catálogo unificado, las organizaciones enfrentan silos de información, accesos descontrolados y falta de visibilidad sobre qué datos existen, quién los usa y de dónde provienen. Unity Catalog resuelve estos problemas de forma nativa en la plataforma, sin herramientas adicionales.`,
    in_proposal:`La Fase 4 de la propuesta consolida Unity Catalog como el pilar del gobierno de datos. Esto incluye definir ownership sobre activos, implementar control de acceso basado en roles, activar el linaje automático y establecer los catálogos y esquemas que organizarán el universo de datos de la organización.`,
    key_concepts:[
      {term:'Metastore',def:'Repositorio central de metadatos que unifica todos los workspaces de Databricks'},
      {term:'Catalog',def:'Nivel superior de organización: agrupa schemas relacionados por dominio o entorno'},
      {term:'Schema',def:'Colección de tablas, vistas y funciones dentro de un catálogo'},
      {term:'Data Lineage',def:'Trazabilidad automática del origen y transformaciones de cada tabla y columna'},
      {term:'Row-level Security',def:'Control de acceso a nivel de fila según el perfil del usuario que consulta'},
    ],
    related:['data-governance','ownership','trazabilidad','databricks']
  },
  'cicd': {
    id:'cicd', title:'CI/CD', subtitle:'Integración y Despliegue Continuo',
    category:'Ingeniería de Software', categoryColor:'#dc2626', icon:'🚀',
    definition:`CI/CD es el conjunto de prácticas que automatizan las fases de construcción, prueba y despliegue de software. CI (Integración Continua) implica la integración frecuente de cambios de código con validación automática. CD (Despliegue Continuo) extiende esto hasta la puesta en producción de forma automatizada.

En Ingeniería de Datos, CI/CD se aplica a pipelines, notebooks, modelos de ML y cualquier activo de código que requiera versionado y despliegue controlado.`,
    why_matters:`Sin CI/CD, los despliegues son procesos manuales, propensos a errores y fuente de incidentes críticos. Con CI/CD, cada cambio pasa por un proceso estandarizado de validación antes de llegar a producción, reduciendo drásticamente los errores y el tiempo de despliegue de horas a minutos.`,
    in_proposal:`La Fase 3 implementa CI/CD como pilar de la automatización. El objetivo es que más del 50% de los despliegues sean automáticos al finalizar la transformación, eliminando la dependencia de procesos manuales y reduciendo significativamente el riesgo operativo.`,
    key_concepts:[
      {term:'Pipeline de CI',def:'Secuencia automática: código → build → tests → validación → artefacto listo'},
      {term:'Pipeline de CD',def:'Despliegue automático de artefactos validados a los entornos correspondientes'},
      {term:'GitHub Actions',def:'Plataforma de CI/CD integrada en GitHub para automatizar flujos de trabajo'},
      {term:'Azure DevOps',def:'Suite de herramientas Microsoft que incluye pipelines de CI/CD para Databricks'},
      {term:'Test automatizado',def:'Validaciones que se ejecutan automáticamente antes de cada despliegue a producción'},
    ],
    related:['git','pull-requests','pipeline','dataops']
  },
  'git': {
    id:'git', title:'Git', subtitle:'Sistema de Control de Versiones Distribuido',
    category:'Control de Versiones', categoryColor:'#f97316', icon:'🌿',
    definition:`Git es un sistema de control de versiones distribuido, creado por Linus Torvalds en 2005 para gestionar el desarrollo del kernel de Linux. Actualmente es el estándar de facto para el control de versiones de código en toda la industria tecnológica.

Git permite a los equipos trabajar en paralelo sobre el mismo código, mantener un historial completo de cada cambio, revertir a versiones anteriores y gestionar múltiples líneas de desarrollo simultáneamente mediante "branches".`,
    why_matters:`Sin Git, el código vive en las computadoras de personas específicas, no existe historial de cambios, es imposible trabajar en paralelo sin sobrescribir el trabajo de otros, y un error puede ser irreversible. Git es la base de cualquier práctica moderna de ingeniería de software o de datos.`,
    in_proposal:`La Fase 2 establece Git como estándar de trabajo para todo el equipo. Esto incluye migrar todos los desarrollos a repositorios Git, definir una estrategia de branches y capacitar al equipo en las prácticas esenciales de control de versiones.`,
    key_concepts:[
      {term:'Commit',def:'Instantánea del estado del código en un momento dado, con mensaje descriptivo'},
      {term:'Branch',def:'Línea de desarrollo independiente que permite trabajar sin afectar a otros'},
      {term:'Merge',def:'Integración de los cambios de una branch hacia otra branch'},
      {term:'Repository',def:'Almacén central de código con todo su historial de cambios'},
      {term:'Pull',def:'Descarga e integración de los últimos cambios del repositorio remoto'},
    ],
    related:['pull-requests','cicd','backlog']
  },
  'pull-requests': {
    id:'pull-requests', title:'Pull Requests', subtitle:'Revisión de Código por Pares Antes del Despliegue',
    category:'Ingeniería de Software', categoryColor:'#8b5cf6', icon:'🔍',
    definition:`Un Pull Request (PR) —también llamado Merge Request en GitLab— es una solicitud formal para integrar cambios de código desde una branch de desarrollo hacia la branch principal. Activa un proceso de revisión donde otros miembros del equipo inspeccionan el código, hacen comentarios y aprueban o rechazan los cambios antes de que lleguen a producción.

Los PRs son el mecanismo central de colaboración y control de calidad en equipos de ingeniería modernos.`,
    why_matters:`Los Pull Requests previenen que código defectuoso llegue a producción, facilitan la transferencia de conocimiento entre miembros del equipo, documentan el razonamiento detrás de los cambios y crean un historial auditable de todas las modificaciones al código base.`,
    in_proposal:`La Fase 2 establece los Pull Requests como obligatorios para todos los cambios al código de producción. Esta práctica, combinada con Git y las definiciones de buenas prácticas, constituye el fundamento del control de calidad del desarrollo.`,
    key_concepts:[
      {term:'Code Review',def:'Inspección sistemática del código por otro desarrollador antes de integrar'},
      {term:'Reviewer',def:'Persona responsable de revisar y aprobar los cambios propuestos en el PR'},
      {term:'Branch protection',def:'Regla que impide commits directos a main, obligando a pasar por un PR'},
      {term:'Merge',def:'Acción de integrar los cambios aprobados del PR a la branch principal'},
      {term:'CI checks',def:'Validaciones automáticas que deben pasar antes de que un PR pueda mergearse'},
    ],
    related:['git','cicd','data-quality']
  },
  'data-governance': {
    id:'data-governance', title:'Gobierno de Datos', subtitle:'Marco de Políticas y Estándares para Activos de Datos',
    category:'Gobierno de Datos', categoryColor:'#7c3aed', icon:'⚖️',
    definition:`El Gobierno de Datos (Data Governance) es el conjunto de procesos, políticas, estándares, organizaciones y tecnologías requeridas para gestionar y proteger los activos de datos de una organización a lo largo de todo su ciclo de vida.

Un programa de gobierno define quién puede hacer qué con qué datos, bajo qué condiciones, y establece mecanismos para asegurar que los datos sean confiables, seguros y estén disponibles para quienes los necesiten.`,
    why_matters:`Sin gobierno de datos las organizaciones enfrentan: datos de baja calidad usados en decisiones críticas, incumplimientos regulatorios, accesos no autorizados a información sensible, incapacidad de responder "¿cuál es la definición oficial de cliente?" y silos de datos incompatibles entre áreas.`,
    in_proposal:`La Fase 4 consolida el gobierno de datos mediante Unity Catalog, definición de ownership formal, estándares de calidad y gestión de SLAs. Esta fase transforma el área de un proveedor de desarrollos a una plataforma gobernada de activos de datos confiables.`,
    key_concepts:[
      {term:'Data Steward',def:'Responsable técnico de la calidad, acceso y uso correcto de un conjunto de datos'},
      {term:'Data Owner',def:'Responsable de negocio que define el uso y política sobre un activo de datos'},
      {term:'Políticas de acceso',def:'Reglas que determinan quién puede ver, modificar o eliminar cada dato'},
      {term:'Catálogo de datos',def:'Inventario de todos los activos de datos con su metadata y contexto de negocio'},
      {term:'Linaje de datos',def:'Trazabilidad del origen y transformaciones de cada dato a lo largo del tiempo'},
    ],
    related:['unity-catalog','ownership','data-quality','sla']
  },
  'data-products': {
    id:'data-products', title:'Productos de Datos', subtitle:'Datos Gestionados como Activos con Orientación al Usuario',
    category:'Arquitectura de Datos', categoryColor:'#059669', icon:'📦',
    definition:`Un Producto de Datos (Data Product) es un activo de datos diseñado, desarrollado y mantenido con la orientación de un producto de software: tiene propietario definido, documentación, SLA de calidad y disponibilidad, interfaz de consumo estable y está orientado a satisfacer las necesidades del usuario final.

El concepto nace del paradigma del Data Mesh y representa un cambio de mentalidad: de ver los datos como subproducto de los sistemas a verlos como activos de primera clase que generan valor por sí mismos.`,
    why_matters:`Cuando los datos se gestionan como productos, los consumidores —analistas, científicos de datos, sistemas de negocio— pueden confiar en ellos, entender qué representan y saber cuándo estarán disponibles. Esto reduce drásticamente el tiempo perdido en investigar discrepancias o limpiar datos antes de usarlos.`,
    in_proposal:`La visión objetivo es evolucionar el área hacia una organización orientada a productos de datos. Esto implica asignar ownership, definir SLAs, documentar contratos de interfaz y medir la satisfacción del consumidor para cada activo de datos clave de la organización.`,
    key_concepts:[
      {term:'Data Mesh',def:'Arquitectura descentralizada que trata los datos como productos por dominio de negocio'},
      {term:'Contrato de datos',def:'Especificación formal del schema, SLA y semántica de un producto de datos'},
      {term:'Data as a Product',def:'Principio de tratar datos con los mismos estándares de calidad que productos de software'},
      {term:'Dominio de datos',def:'Área de negocio responsable de un conjunto coherente y relacionado de datos'},
      {term:'Autoservicio',def:'Plataforma que permite a los equipos publicar y consumir datos sin fricción operativa'},
    ],
    related:['data-governance','ownership','sla','data-quality']
  },
  'sla': {
    id:'sla', title:'SLA', subtitle:'Service Level Agreement — Acuerdo de Nivel de Servicio',
    category:'Gestión de Servicios', categoryColor:'#0891b2', icon:'📋',
    definition:`Un Service Level Agreement (SLA) es un contrato formal que define el nivel de servicio esperado: disponibilidad, rendimiento, calidad y tiempos de respuesta comprometidos. Incluye las consecuencias o medidas correctivas si los niveles no se alcanzan.

En Ingeniería de Datos, los SLAs se aplican a la disponibilidad de los datos (¿cuándo estarán listos?), su calidad (¿qué porcentaje de completitud se garantiza?) y la latencia de actualización (¿qué tan recientes son los datos?).`,
    why_matters:`Sin SLAs, el negocio no tiene visibilidad de cuándo podrá contar con los datos ni qué calidad tendrán. Con SLAs, la ingeniería de datos se vuelve un servicio predecible y confiable, lo que aumenta la confianza del negocio y facilita la planificación de iniciativas analíticas e iniciativas de IA.`,
    in_proposal:`La Fase 4 incluye la definición de SLAs para los activos de datos críticos. La Fase 5 implementa el monitoreo necesario para verificar el cumplimiento y alertar proactivamente ante cualquier desviación antes de que impacte al negocio.`,
    key_concepts:[
      {term:'Freshness SLA',def:'Compromiso sobre qué tan recientes son los datos (ej: disponibles antes de las 8 AM)'},
      {term:'Availability SLA',def:'Porcentaje del tiempo que los datos deben estar disponibles para su consumo'},
      {term:'Quality SLA',def:'Porcentaje mínimo de completitud o exactitud garantizado para un dataset'},
      {term:'MTTR',def:'Mean Time To Recovery: tiempo promedio comprometido para resolver un incidente de datos'},
      {term:'Breach',def:'Evento donde el nivel de servicio prometido no fue alcanzado en el periodo medido'},
    ],
    related:['data-products','observabilidad','data-quality','data-governance']
  },
  'data-quality': {
    id:'data-quality', title:'Calidad de Datos', subtitle:'Aptitud de los Datos para su Uso Previsto',
    category:'Calidad y Confiabilidad', categoryColor:'#16a34a', icon:'✅',
    definition:`La Calidad de Datos es el grado en que los datos son adecuados para su uso previsto en operaciones, toma de decisiones y planificación. Se mide a través de dimensiones como exactitud, completitud, consistencia, actualidad, unicidad y validez.

Un programa de calidad de datos implementa procesos para medir, monitorear y mejorar estas dimensiones de forma continua, no como una actividad puntual sino como práctica permanente.`,
    why_matters:`Los datos de baja calidad tienen un costo directo: decisiones basadas en información incorrecta, tiempo del equipo dedicado a "limpiar" datos antes de analizarlos, pérdida de confianza en los reportes y analytics, e incumplimientos regulatorios. La calidad de datos es el fundamento de cualquier iniciativa analítica o de IA.`,
    in_proposal:`La Fase 2 establece controles de calidad mínimos como parte de los estándares de desarrollo. La Fase 5 implementa monitoreo proactivo con alertas automáticas. La propuesta incluye como indicador de éxito la reducción de incidentes asociados a problemas de calidad.`,
    key_concepts:[
      {term:'Exactitud',def:'Los datos representan correctamente la realidad que describen en el sistema fuente'},
      {term:'Completitud',def:'Ausencia de valores nulos o faltantes donde se requieren datos críticos'},
      {term:'Consistencia',def:'Coherencia de los datos entre diferentes sistemas y a lo largo del tiempo'},
      {term:'Actualidad (Freshness)',def:'Los datos están actualizados dentro del periodo comprometido por el SLA'},
      {term:'Unicidad',def:'Ausencia de registros duplicados no esperados en los datasets'},
    ],
    related:['pipeline','observabilidad','sla','dataops']
  },
  'pipeline': {
    id:'pipeline', title:'Pipeline de Datos', subtitle:'Flujo Automatizado de Procesamiento de Datos',
    category:'Ingeniería de Datos', categoryColor:'#2563eb', icon:'⚙️',
    definition:`Un Pipeline de Datos es una secuencia automatizada de pasos para mover y transformar datos desde fuentes de origen hasta destinos de consumo. Cada paso recibe datos, aplica una transformación o validación, y entrega el resultado al siguiente paso.

Los pipelines son la unidad básica de trabajo en la ingeniería de datos moderna. Pueden procesar datos en lotes (batch) o en tiempo real (streaming), y son orquestados por herramientas que gestionan dependencias, reintentos y alertas ante fallos.`,
    why_matters:`Los pipelines automatizan la transformación de datos en bruto a información lista para el análisis, eliminando trabajo manual, garantizando reproducibilidad y permitiendo escalar el procesamiento. Son el "aparato circulatorio" de la plataforma de datos: si fallan, el flujo de información al negocio se detiene.`,
    in_proposal:`Los pipelines son el artefacto central de la plataforma. La Fase 3 automatiza sus despliegues mediante CI/CD. La Fase 5 implementa observabilidad y monitoreo proactivo. El objetivo es garantizar pipelines confiables que cumplan sus SLAs de disponibilidad y calidad.`,
    key_concepts:[
      {term:'ETL',def:'Extract, Transform, Load: patrón clásico para mover y transformar datos entre sistemas'},
      {term:'ELT',def:'Extract, Load, Transform: variante moderna donde la transformación ocurre en el destino'},
      {term:'Orquestación',def:'Gestión de dependencias, orden y programación de ejecución de los pipelines'},
      {term:'Databricks Workflows',def:'Herramienta nativa de Databricks para orquestar y monitorear pipelines'},
      {term:'Streaming',def:'Procesamiento continuo de datos en tiempo real o near-real-time'},
    ],
    related:['dataops','cicd','observabilidad','data-quality']
  },
  'backlog': {
    id:'backlog', title:'Backlog', subtitle:'Lista Priorizada de Trabajo Pendiente',
    category:'Gestión Ágil', categoryColor:'#d97706', icon:'📝',
    definition:`El Backlog (o Product Backlog en Scrum) es una lista ordenada por prioridad de todo el trabajo identificado que el equipo necesita realizar. Incluye nuevas funcionalidades, mejoras, correcciones de bugs, deuda técnica y tareas operativas.

Es un artefacto vivo que se actualiza, re-prioriza y refina continuamente basándose en el feedback del negocio, cambios de contexto y la capacidad real del equipo. Su gestión transparente es clave en metodologías ágiles.`,
    why_matters:`Sin un backlog único y visible, el trabajo se gestiona de forma caótica: prioridades implícitas, solicitudes por canales informales, falta de visibilidad de cuánto trabajo existe y ausencia de criterio para decidir qué hacer primero. Un backlog bien gestionado hace el trabajo visible y la priorización transparente para todos.`,
    in_proposal:`La Fase 1 establece el backlog único como primera acción de orden operacional. Todos los requerimientos de negocio, mejoras técnicas y deuda deben ingresar por un único punto de gestión. Este es el fundamento de la priorización transparente y la gestión visual del trabajo del equipo.`,
    key_concepts:[
      {term:'Épica',def:'Unidad grande de trabajo que agrupa historias de usuario relacionadas bajo un objetivo'},
      {term:'Historia de usuario',def:'Descripción de funcionalidad desde la perspectiva y necesidad del usuario final'},
      {term:'Refinamiento',def:'Proceso de detallar, estimar y preparar elementos del backlog para su ejecución'},
      {term:'Priorización',def:'Ordenamiento del backlog según valor de negocio, urgencia y esfuerzo requerido'},
      {term:'Sprint',def:'Ciclo corto de trabajo (1-4 semanas) donde se ejecutan elementos del backlog'},
    ],
    related:['data-products','dataops','time-to-market']
  },
  'ownership': {
    id:'ownership', title:'Ownership de Datos', subtitle:'Responsabilidad Formal sobre Activos de Datos',
    category:'Gobierno de Datos', categoryColor:'#7c3aed', icon:'🏛️',
    definition:`El Ownership de Datos es la asignación formal de responsabilidad sobre un activo de datos a una persona o equipo específico. El propietario es responsable de la calidad, disponibilidad, seguridad, documentación y uso apropiado de ese activo a lo largo de su ciclo de vida.

Es un concepto fundamental en el gobierno de datos: sin propietarios claros, los datos caen en el "nadie es responsable" y la calidad y confiabilidad se degradan con el tiempo.`,
    why_matters:`La falta de ownership es una de las causas más comunes de problemas de calidad de datos en las organizaciones. Cuando todos son responsables, nadie lo es. El ownership explícito crea accountability, motiva la inversión en mantener los activos en buen estado y facilita la resolución rápida de incidentes.`,
    in_proposal:`La Fase 4 define formalmente el ownership sobre todos los activos de datos críticos. Esto incluye identificar qué datos existen, asignar un responsable técnico (Data Steward) y un responsable de negocio (Data Owner) para cada dominio, y establecer expectativas claras de mantenimiento y calidad.`,
    key_concepts:[
      {term:'Data Owner',def:'Rol de negocio: define el propósito, uso permitido y políticas del activo de datos'},
      {term:'Data Steward',def:'Rol técnico: responsable de la calidad, acceso y mantenimiento del activo'},
      {term:'Accountability',def:'Responsabilidad medible y exigible sobre los resultados de un activo de datos'},
      {term:'Dominio',def:'Área de negocio que agrupa activos de datos relacionados bajo un mismo owner'},
      {term:'RACI',def:'Matriz que define quién es Responsible, Accountable, Consulted e Informed sobre un activo'},
    ],
    related:['data-governance','data-products','unity-catalog','sla']
  },
  'observabilidad': {
    id:'observabilidad', title:'Observabilidad', subtitle:'Visibilidad del Estado Interno de los Sistemas de Datos',
    category:'Operaciones', categoryColor:'#0891b2', icon:'🔭',
    definition:`La Observabilidad es la capacidad de entender el estado interno de un sistema a partir de los datos que expone externamente: logs, métricas y trazas. En Ingeniería de Datos, permite monitorear pipelines, medir calidad de datos en tiempo real y detectar anomalías de forma proactiva antes de que impacten al negocio.

Se diferencia del monitoreo tradicional en que no solo responde "¿está bien o mal?" sino que permite preguntar "¿por qué está mal?" sin necesidad de instrumentación adicional.`,
    why_matters:`Sin observabilidad, los equipos se enteran de los problemas cuando el negocio los reporta: el dato está desactualizado, el reporte no carga, el número no cuadra. Con observabilidad, los problemas se detectan y resuelven antes de que el negocio los experimente, reduciendo el MTTR y aumentando la confianza en la plataforma.`,
    in_proposal:`La Fase 5 implementa observabilidad como capacidad central. Incluye: monitoreo de pipelines con alertas automáticas, métricas de calidad (freshness, completitud), dashboards operativos del equipo y gestión proactiva de incidentes, cerrando el ciclo de madurez DataOps.`,
    key_concepts:[
      {term:'Logs',def:'Registros cronológicos de eventos generados por el sistema para diagnóstico y auditoría'},
      {term:'Métricas',def:'Mediciones numéricas del comportamiento del sistema a lo largo del tiempo'},
      {term:'Alertas',def:'Notificaciones automáticas cuando una métrica supera un umbral definido'},
      {term:'Data Freshness',def:'Métrica que mide qué tan recientes son los datos disponibles en la plataforma'},
      {term:'SLA Monitoring',def:'Monitoreo continuo del cumplimiento de los compromisos de nivel de servicio'},
    ],
    related:['pipeline','data-quality','sla','dataops']
  },
  'trazabilidad': {
    id:'trazabilidad', title:'Trazabilidad (Data Lineage)', subtitle:'Rastreo del Origen y Transformación de los Datos',
    category:'Gobierno de Datos', categoryColor:'#7c3aed', icon:'🔗',
    definition:`La Trazabilidad de Datos (Data Lineage) es la capacidad de rastrear el origen, movimiento y transformación de los datos a lo largo de toda la plataforma. Responde preguntas clave: ¿de dónde vienen estos datos?, ¿qué transformaciones sufrieron?, ¿qué reportes dependen de esta tabla?.

Es un componente esencial del gobierno de datos y un aliado crítico para el análisis de impacto cuando se modifica una fuente de datos o se detecta un problema de calidad.`,
    why_matters:`Sin trazabilidad, es imposible responder con certeza a preguntas de auditoría, entender el impacto de cambios en fuentes, o depurar discrepancias entre sistemas. Unity Catalog provee linaje automático: el equipo puede navegar visualmente el flujo completo de datos y entender dependencias en minutos, no en días.`,
    in_proposal:`Unity Catalog activa el linaje automático como parte de la Fase 4. La Fase 5 aprovecha esta trazabilidad como herramienta operativa: ante un incidente, el equipo puede identificar rápidamente qué datos y reportes se ven afectados upstream y downstream.`,
    key_concepts:[
      {term:'Lineage graph',def:'Grafo visual que muestra las dependencias y transformaciones entre datasets'},
      {term:'Upstream',def:'Fuentes de datos de las que depende un dataset específico para su cálculo'},
      {term:'Downstream',def:'Datasets, reportes o sistemas que dependen del dataset en cuestión'},
      {term:'Impact analysis',def:'Evaluación de qué activos se ven afectados si una fuente de origen cambia'},
    ],
    related:['unity-catalog','data-governance','observabilidad','pipeline']
  },
  'time-to-market': {
    id:'time-to-market', title:'Time-to-Market', subtitle:'Velocidad de Entrega de Valor al Negocio',
    category:'Métricas de Negocio', categoryColor:'#059669', icon:'⏱️',
    definition:`Time-to-Market (TTM) es el tiempo total que transcurre desde que se identifica una necesidad de negocio hasta que la solución de datos está disponible para su uso. En Ingeniería de Datos mide cuánto tarda el equipo en entregar un nuevo dataset, reporte o pipeline desde que se solicita.

Es una de las métricas más importantes para medir la agilidad de un equipo de datos y su capacidad de generar valor para la organización de forma oportuna.`,
    why_matters:`Un TTM elevado significa que el negocio espera semanas o meses para tener los datos que necesita para tomar decisiones. Esto ralentiza iniciativas estratégicas, genera soluciones no gobernadas (shadow IT) y reduce la confianza en el área de datos como socio estratégico del negocio.`,
    in_proposal:`La reducción del time-to-market es uno de los beneficios de negocio clave de la propuesta. Las automatizaciones de las Fases 3 y 6, combinadas con los estándares de las Fases 2 y 4, permiten entregar nuevas soluciones de datos más rápido y con mayor confiabilidad.`,
    key_concepts:[
      {term:'Lead time',def:'Tiempo total desde la solicitud del negocio hasta la entrega al usuario final'},
      {term:'Cycle time',def:'Tiempo desde el inicio del desarrollo hasta la entrega en producción'},
      {term:'Deuda técnica',def:'Costo futuro de decisiones técnicas subóptimas que ralentizan el desarrollo'},
      {term:'Velocidad de entrega',def:'Cantidad de trabajo que el equipo puede completar en un ciclo de tiempo'},
    ],
    related:['dataops','cicd','backlog','data-products']
  },
  'inteligencia-artificial': {
    id:'inteligencia-artificial', title:'Inteligencia Artificial', subtitle:'IA Aplicada a la Productividad en Ingeniería de Datos',
    category:'Tecnología Emergente', categoryColor:'#db2777', icon:'🤖',
    definition:`La Inteligencia Artificial (IA) es la disciplina que desarrolla sistemas capaces de realizar tareas que típicamente requieren inteligencia humana: razonamiento, aprendizaje, comprensión del lenguaje y generación de contenido.

En Ingeniería de Datos, la IA se aplica principalmente como amplificador de productividad: generación de código, documentación automática, optimización de consultas SQL, explicación de datasets y automatización de tareas repetitivas de soporte.`,
    why_matters:`Los asistentes de IA como GitHub Copilot y el asistente nativo de Databricks pueden multiplicar la productividad de los ingenieros de datos. Un ingeniero asistido por IA puede generar código de calidad, documentar datasets, crear tests y depurar errores significativamente más rápido, liberando capacidad para tareas de mayor valor estratégico.`,
    in_proposal:`La Fase 6 es la culminación de la transformación: incorporar IA como amplificador de la productividad del equipo. Incluye asistencia al desarrollo, generación automática de documentación, optimización de consultas y automatización de procesos de soporte, aprovechando las capacidades nativas de Databricks y herramientas complementarias.`,
    key_concepts:[
      {term:'GitHub Copilot',def:'Asistente de IA que genera y completa código en tiempo real dentro del editor'},
      {term:'Databricks Assistant',def:'IA nativa de Databricks para consultas SQL, notebooks y optimización de código'},
      {term:'LLM',def:'Large Language Model: modelo de lenguaje de gran escala, base tecnológica de los asistentes de IA'},
      {term:'Generación de código',def:'Capacidad de la IA de escribir código funcional a partir de instrucciones en lenguaje natural'},
      {term:'RAG',def:'Retrieval-Augmented Generation: técnica para conectar IA con documentación y datos propios'},
    ],
    related:['databricks','data-products','dataops','pipeline']
  },
};
