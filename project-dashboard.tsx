"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Clock, TrendingUp, AlertTriangle, Lightbulb, ChevronDown, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function Component() {
  // Estados para controlar as sanfonas
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [openCompletedSections, setOpenCompletedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (category: string, isCompleted = false) => {
    if (isCompleted) {
      setOpenCompletedSections((prev) => ({
        ...prev,
        [category]: !prev[category],
      }))
    } else {
      setOpenSections((prev) => ({
        ...prev,
        [category]: !prev[category],
      }))
    }
  }

  // showInTimeline: 1 = aparece em ambos, 2 = só no cronograma, 3 = só em projetos em andamento
  const projects = [
    {
      id: 1,
      name: "Engine Fiscal",
      progress: 100,
      status: "pilot",
      startDate: "01/04/2025",
      endDate: "30/06/2025",
      color: "bg-blue-500",
      showInTimeline: 3, 
      category: "Fiscal",
    },
    {
      id: 2,
      name: "Cartões Normalizados",
      progress: 100,
      status: "completed",
      startDate: "01/04/2025",
      endDate: "27/06/2025",
      color: "bg-cyan-500",
      showInTimeline: 1, 
      category: "Cartões",
    },
    {
      id: 3,
      name: "Cartões Limites",
      progress: 0,
      status: "active",
      startDate: "30/06/2025",
      endDate: "08/08/2025",
      color: "bg-blue-600",
      showInTimeline: 1,
      category: "Cartões",
    },
    {
      id: 4,
      name: "Cartões Blacklist",
      progress: 85,
      status: "active",
      startDate: "30/06/2025",
      endDate: "08/08/2025",
      color: "bg-blue-700",
      showInTimeline: 1,
      category: "Cartões",
    },
    {
      id: 5,
      name: "Cartões Pré aprovados",
      progress: 0,
      status: "active",
      startDate: "11/08/2025",
      endDate: "29/08/2025",
      color: "bg-indigo-500",
      showInTimeline: 1, 
      category: "Cartões",
    },
    {
      id: 6,
      name: "Pacote melhorias conciliação",
      progress: 100,
      status: "completed",
      startDate: "08/04/2025",
      endDate: "17/07/2025",
      color: "bg-cyan-600",
      showInTimeline: 3, 
      category: "Conciliação",
    },
    {
      id: 7,
      name: "Senhas Automáticas",
      progress: 75,
      status: "test",
      startDate: "08/04/2025",
      endDate: "30/06/2025",
      color: "bg-cyan-600",
      showInTimeline: 3,
      category: "Financeiro",
    },
    {
      id: 8,
      name: "Termo automático",
      progress: 100,
      status: "test",
      startDate: "12/04/2025",
      endDate: "13/06/2025",
      color: "bg-blue-400",
      showInTimeline: 3,
      category: "Financeiro",
    },
    {
      id: 9,
      name: "VAR OFF",
      progress: 100,
      status: "completed",
      startDate: "02/05/2025",
      endDate: "16/07/2025",
      color: "bg-cyan-700",
      showInTimeline: 1,
      category: "VAR",
    },
    {
      id: 10,
      name: "VAR Mobile",
      progress: 100,
      status: "completed",
      startDate: "20/04/2025",
      endDate: "23/06/2025",
      color: "bg-blue-800",
      showInTimeline: 3, 
      category: "VAR",
    },
    {
      id: 11,
      name: "Automação de testes",
      progress: 40,
      status: "active",
      startDate: "23/06/2025",
      endDate: "04/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
      category: "Automação",
    },
    {
      id: 12,
      name: "Tesouraria",
      progress: 60,
      status: "active",
      startDate: "01/07/2025",
      endDate: "13/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
      category: "Tesouraria",
    },
    {
      id: 13,
      name: "MFA",
      progress: 42,
      status: "active",
      startDate: "01/07/2025",
      endDate: "19/09/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
      category: "MFA",
    },
    {
      id: 16,
      name: "API CAV",
      progress: 100,
      status: "test",
      startDate: "01/06/2025",
      endDate: "27/06/2025",
      color: "bg-blue-800",
      showInTimeline: 3,
      category: "VAR",
    },
        {
      id: 17,
      name: "Sabadão Mobile",
      progress: 0,
      status: "active",
      startDate: "21/07/2025",
      endDate: "04/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1,
      category: "VAR",
    },
  ]

  const advances = [
    "Piloto da Engine com erros reduzidos",
    "Blacklist em fase final de desenvolvimento e prontos para inicar Manutenção de Limites",
    "Melhoria no desempenho na conciliação",
    "Automação dos Testes da Venda Mercantil pronta para ser usada pela primeira vez"
  ]

  const attentionPoints = [
    "Problemas pontuais surgindo no Piloto da Engine",
    "Problemas com a Migrate",
    "Conciliação lenta e reprocessamento travado",
    "Versionamento do InVoicy na Engine",
    "Risco de atraso na Automação de Testes"
  ]

  const futureOpportunities = [
    {
      title: "Budget lojas",
      description:
        "Implementar uma ferramenta que automatize a consolidação de informações de lojas existentes e projeções de futuras lojas, otimizando o time de Planejamento e aumentando a agilidade na elaboração do documento de budget, assegurando assim a precisão dos dados e permitir maior foco em análises estratégicas.",
    },
    {
      title: "Saneamento da base de fornecedores",
      description:
        "Corrigir e atualizar a base de dados de fornecedores, atualmente desatualizada e contendo informações incorretas e duplicadas. A solução prevê a integração com a API da CNPJA para realizar consultas de dados confiáveis diretamente da Receita Federal, tratando os dados internamente em uma nova base.",
    },
    {
      title: "Links de campanhas personalizados",
      description:
        "Criar links personalizados para a roleta ou dinâmicas similares para poder acompanhar o quão efetiva foi a ação, assim sabendo quantas pessoas vieram até a loja graças à propaganda de um influenciador ou através de uma ação divulgada.",
    },
  ]


  //  projetos para o cronograma (showInTimeline: 1 ou 2)
  const timelineProjects = projects.filter((project) => project.showInTimeline === 1 || project.showInTimeline === 2)

  //  projetos para a lista (showInTimeline: 1 ou 3) 
  const projectsInProgress = projects.filter(
    (project) => (project.showInTimeline === 1 || project.showInTimeline === 3) && project.status !== "completed",
  )

  const completedProjects = projects.filter((project) => project.status === "completed")

  // Agrupar projetos 
  const groupedProjectsInProgress = projectsInProgress.reduce(
    (acc, project) => {
      const category = project.category || "Outros"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(project)
      return acc
    },
    {} as Record<string, typeof projects>,
  )

  const groupedCompletedProjects = completedProjects.reduce(
    (acc, project) => {
      const category = project.category || "Outros"
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(project)
      return acc
    },
    {} as Record<string, typeof projects>,
  )

  // range dinâmico do gráfico de Gantt
  const calculateGanttRange = () => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split("/").map(Number)
      return new Date(year, month - 1, day)
    }

    // range padrão
    if (timelineProjects.length === 0) {
      const now = new Date()
      return {
        ganttStart: new Date(now.getFullYear(), now.getMonth() - 1, 1),
        ganttEnd: new Date(now.getFullYear(), now.getMonth() + 5, 0),
      }
    }

    const startDates = timelineProjects.map((item) => parseDate(item.startDate))
    const endDates = timelineProjects.map((item) => parseDate(item.endDate))

    const earliestStart = new Date(Math.min(...startDates.map((d) => d.getTime())))
    const latestEnd = new Date(Math.max(...endDates.map((d) => d.getTime())))

    const ganttStart = new Date(earliestStart.getFullYear(), earliestStart.getMonth() - 1, 1)
    const ganttEnd = new Date(latestEnd.getFullYear(), latestEnd.getMonth() + 1, 0) // último dia do mês

    return { ganttStart, ganttEnd }
  }

  // posição no Gantt com range dinâmico
  const calculateGanttPosition = (startDate: string, endDate: string) => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split("/").map(Number)
      return new Date(year, month - 1, day)
    }

    const projectStart = parseDate(startDate)
    const projectEnd = parseDate(endDate)
    const { ganttStart, ganttEnd } = calculateGanttRange()

    const totalDays = (ganttEnd.getTime() - ganttStart.getTime()) / (1000 * 60 * 60 * 24)
    const startOffset = (projectStart.getTime() - ganttStart.getTime()) / (1000 * 60 * 60 * 24)
    const duration = (projectEnd.getTime() - projectStart.getTime()) / (1000 * 60 * 60 * 24)

    const leftPercent = (startOffset / totalDays) * 100
    const widthPercent = (duration / totalDays) * 100

    return { left: Math.max(0, leftPercent), width: Math.min(widthPercent, 100 - leftPercent) }
  }

  const calculateTodayPosition = () => {
    const today = new Date()
    const { ganttStart, ganttEnd } = calculateGanttRange()

    const totalDays = (ganttEnd.getTime() - ganttStart.getTime()) / (1000 * 60 * 60 * 24)
    const todayOffset = (today.getTime() - ganttStart.getTime()) / (1000 * 60 * 60 * 24)

    return Math.max(0, Math.min(100, (todayOffset / totalDays) * 100))
  }

  const generateMonthsHeader = () => {
    const { ganttStart, ganttEnd } = calculateGanttRange()
    const months = []
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]

    const currentDate = new Date(ganttStart)
    while (currentDate <= ganttEnd) {
      months.push(monthNames[currentDate.getMonth()])
      currentDate.setMonth(currentDate.getMonth() + 1)
    }

    return months
  }

  // Função para obter o texto do badge baseado no showInTimeline
  const getTimelineBadgeText = (showInTimeline: number) => {
    switch (showInTimeline) {
      case 1:
        return "Ambos"
      case 2:
        return "Só cronograma"
      case 3:
        return "Só lista"
      default:
        return ""
    }
  }

  const getTimelineBadgeColor = (showInTimeline: number) => {
    switch (showInTimeline) {
      case 1:
        return "bg-green-100 text-green-800 border-green-200"
      case 2:
        return "bg-blue-100 text-blue-800 border-blue-200"
      case 3:
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const todayPosition = calculateTodayPosition()
  const today = new Date()
  const todayFormatted = today.toLocaleDateString("pt-BR")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-500"
      case "active":
        return "bg-blue-500"
      case "delayed":
        return "bg-red-500"
      case "rollout":
        return "bg-purple-500"
      case "pilot":
        return "bg-yellow-500"
      case "block":
        return "bg-red-500"
      case "test":
        return "bg-green-700"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Concluído"
      case "active":
        return "Em andamento"
      case "delayed":
        return "Atrasado"
      case "rollout":
        return "Rollout"
      case "pilot":
        return "Piloto"
      case "block":
        return "Bloqueado"
      case "test":
        return "Em teste"
      default:
        return "Pendente"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Cartões: "bg-blue-100 text-blue-800 border-blue-200",
      VAR: "bg-purple-100 text-purple-800 border-purple-200",
      Automação: "bg-green-100 text-green-800 border-green-200",
      Fiscal: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Conciliação: "bg-cyan-100 text-cyan-800 border-cyan-200",
      Financeiro: "bg-indigo-100 text-indigo-800 border-indigo-200",
    }
    return colors[category] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  // Componente para renderizar um projeto individual
  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="space-y-2 p-3 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">{project.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className={`${getStatusColor(project.status)} text-white text-xs`}>
            {getStatusText(project.status)}
          </Badge>
          <span className="text-sm font-bold text-slate-800">{project.progress}%</span>
        </div>
      </div>
      <Progress value={project.progress} className="h-2" />
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span>Início: {project.startDate}</span>
        <span>Entrega: {project.endDate}</span>
      </div>
    </div>
  )

  // Componente para renderizar um projeto concluído individual
  const CompletedProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="space-y-2 p-3 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">{project.name}</span>
        </div>
        <Badge className="bg-green-500 text-white text-xs">100% Concluído</Badge>
      </div>
      <div className="flex items-center gap-4 text-xs text-green-600">
        <span>Início: {project.startDate}</span>
        <span>Entrega: {project.endDate}</span>
      </div>
    </div>
  )

  // Componente simplificado para projeto único em andamento
  const SingleProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="space-y-2 p-3 bg-white rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-700">{project.name}</span>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className={`${getStatusColor(project.status)} text-white text-xs`}>
            {getStatusText(project.status)}
          </Badge>
          <span className="text-sm font-bold text-slate-800">{project.progress}%</span>
        </div>
      </div>
      <Progress value={project.progress} className="h-2" />
      <div className="flex items-center gap-4 text-xs text-slate-500">
        <span>Início: {project.startDate}</span>
        <span>Entrega: {project.endDate}</span>
      </div>
    </div>
  )

  // Componente simplificado para projeto único concluído
  const SingleCompletedProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="space-y-2 p-3 bg-green-50 rounded-lg border border-green-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">{project.name}</span>
        </div>
        <Badge className="bg-green-500 text-white text-xs">100% Concluído</Badge>
      </div>
      <div className="flex items-center gap-4 text-xs text-green-600">
        <span>Início: {project.startDate}</span>
        <span>Entrega: {project.endDate}</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-slate-800">Dashboard de Projetos</h1>
          <p className="text-slate-600">Acompanhe o progresso e cronograma dos seus projetos</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timeline */}
          <Card className="lg:col-span-2 shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Calendar className="h-5 w-5 text-blue-600" />
                Cronograma de Projetos
                <Badge variant="secondary" className="ml-2 text-xs">
                  {timelineProjects.length} projetos
                </Badge>
              </CardTitle>
              <div className="text-xs text-slate-500 mt-1">
                Período: {(() => {
                  const { ganttStart, ganttEnd } = calculateGanttRange()
                  const startMonth = ganttStart.toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
                  const endMonth = ganttEnd.toLocaleDateString("pt-BR", { month: "short", year: "numeric" })
                  return `${startMonth} - ${endMonth}`
                })()}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Header com meses */}
                <div className="grid grid-cols-12 gap-2 text-xs font-medium text-slate-600 mb-6 border-b pb-2">
                  <div className="col-span-3">Projeto</div>
                  <div className="col-span-6 flex justify-between text-center">
                    {generateMonthsHeader().map((month, index) => (
                      <span key={index} className="flex-1">
                        {month}
                      </span>
                    ))}
                  </div>
                  <div className="col-span-3 text-center">Início → Entrega</div>
                </div>

                {timelineProjects.map((item) => {
                  const position = calculateGanttPosition(item.startDate, item.endDate)
                  return (
                    <div
                      key={item.id}
                      className="grid grid-cols-12 gap-2 items-center py-3 hover:bg-slate-50 rounded-lg transition-colors group"
                    >
                      <div className="col-span-3 text-sm font-medium text-slate-700 truncate">
                        <div className="flex flex-col gap-1">
                          <span>{item.name}</span>
                          <div className="flex gap-1 flex-wrap">
                            <Badge variant="outline" className={`text-xs w-fit ${getCategoryColor(item.category)}`}>
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 relative h-8 bg-slate-100 rounded-lg overflow-hidden">
                        {/* Barra do projeto */}
                        <div
                          className={`absolute top-1 bottom-1 ${item.color} rounded-md shadow-sm transition-all duration-300 group-hover:shadow-md flex items-center justify-center`}
                          style={{
                            left: `${position.left}%`,
                            width: `${position.width}%`,
                          }}
                        >
                          {/* Indicador de progresso */}
                          <div
                            className="absolute left-0 top-0 bottom-0 bg-white/30 rounded-md transition-all duration-500"
                            style={{ width: `${item.progress}%` }}
                          />
                          <span className="text-xs font-medium text-white z-10">{item.progress}%</span>
                        </div>

                        {/* Linha "hoje" */}
                        <div
                          className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-20"
                          style={{ left: `${todayPosition}%` }}
                          title={`Hoje: ${todayFormatted}`}
                        >
                          <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="absolute -top-6 -left-8 text-xs font-medium text-red-600 bg-white px-1 rounded shadow-sm border">
                            Hoje
                          </div>
                        </div>
                      </div>
                      <div className="col-span-3 text-xs text-slate-600 text-center space-y-1">
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="h-3 w-3 text-green-600" />
                          <span className="text-green-600 font-medium">{item.startDate}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Clock className="h-3 w-3 text-blue-600" />
                          <span className="text-blue-600 font-medium">{item.endDate}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Legenda */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-center gap-6 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                    <span>Data de Início</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    <span>Data de Entrega</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Hoje ({todayFormatted})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-3 bg-slate-400 rounded-sm relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-white/50 rounded-sm"></div>
                    </div>
                    <span>Progresso</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Attention Points and Advances */}
          <div className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Pontos de atenção
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {attentionPoints.map((point, index) => (
                  <Alert key={index} className="border-amber-200 bg-amber-50">
                    <AlertTriangle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-800">{point}</AlertDescription>
                  </Alert>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-slate-800">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Avanços
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {advances.map((advance, index) => (
                  <div key={index} className="space-y-2 p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-green-700 leading-relaxed">{advance}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Projects in Progress with Conditional Accordions */}
          <Card className="lg:col-span-2 shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Projetos em andamento
                <Badge variant="secondary" className="ml-2 text-xs">
                  {projectsInProgress.length} projetos
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(groupedProjectsInProgress).map(([category, categoryProjects]) => {
                // Se a categoria tem apenas 1 projeto, exibe diretamente sem header
                if (categoryProjects.length === 1) {
                  const project = categoryProjects[0]
                  return <SingleProjectCard key={category} project={project} />
                }

                // Se a categoria tem mais de 1 projeto, usa sanfona
                return (
                  <div key={category} className="space-y-2">
                    <button
                      onClick={() => toggleSection(category, false)}
                      className="flex items-center justify-between w-full p-3 bg-slate-50 hover:bg-slate-100 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`${getCategoryColor(category)} font-medium`}>
                          {category}
                        </Badge>
                        <span className="text-sm font-medium text-slate-700">{categoryProjects.length} projetos</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform ${
                          openSections[category] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSections[category] && (
                      <div className="space-y-3 pl-4 animate-in slide-in-from-top-2 duration-200">
                        {categoryProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </CardContent>
          </Card>

          {/* Completed Projects with Conditional Accordions */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Projetos Concluídos
                <Badge variant="secondary" className="ml-2 text-xs bg-green-100 text-green-800">
                  {completedProjects.length} projetos
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(groupedCompletedProjects).map(([category, categoryProjects]) => {
                // Se a categoria tem apenas 1 projeto, exibe diretamente sem header
                if (categoryProjects.length === 1) {
                  const project = categoryProjects[0]
                  return <SingleCompletedProjectCard key={category} project={project} />
                }

                // Se a categoria tem mais de 1 projeto, usa sanfona
                return (
                  <div key={category} className="space-y-2">
                    <button
                      onClick={() => toggleSection(category, true)}
                      className="flex items-center justify-between w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className={`${getCategoryColor(category)} font-medium`}>
                          {category}
                        </Badge>
                        <span className="text-sm font-medium text-green-700">{categoryProjects.length} projetos</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-green-500 transition-transform ${
                          openCompletedSections[category] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openCompletedSections[category] && (
                      <div className="space-y-3 pl-4 animate-in slide-in-from-top-2 duration-200">
                        {categoryProjects.map((project) => (
                          <CompletedProjectCard key={project.id} project={project} />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* Future Opportunities */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Lightbulb className="h-5 w-5 text-green-600" />
              Oportunidades futuras
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {futureOpportunities.map((opportunity, index) => (
                <div key={index} className="space-y-2 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">{opportunity.title}</h4>
                  <p className="text-sm text-green-700 leading-relaxed">{opportunity.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
