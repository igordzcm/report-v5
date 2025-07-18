"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Calendar, Clock, TrendingUp, AlertTriangle, Lightbulb } from "lucide-react"

export default function Component() {
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
    },
    {
      id: 3,
      name: "Cartões Normalizados",
      progress: 100,
      status: "completed",
      startDate: "01/04/2025",
      endDate: "27/06/2025",
      color: "bg-cyan-500",
      showInTimeline: 2, 
    },
    {
      id: 4,
      name: "Cartões Limites",
      progress: 0,
      status: "active",
      startDate: "30/06/2025",
      endDate: "08/08/2025",
      color: "bg-blue-600",
      showInTimeline: 2,
    },
    {
      id: 5,
      name: "Cartões Blacklist",
      progress: 85,
      status: "active",
      startDate: "30/06/2025",
      endDate: "08/08/2025",
      color: "bg-blue-700",
      showInTimeline: 2,
    },
    {
      id: 6,
      name: "Cartões Pré aprovados",
      progress: 0,
      status: "active",
      startDate: "11/08/2025",
      endDate: "29/08/2025",
      color: "bg-indigo-500",
      showInTimeline: 2, 
    },
    {
      id: 7,
      name: "Melhorias conciliação",
      progress: 100,
      status: "completed",
      startDate: "08/04/2025",
      endDate: "30/06/2025",
      color: "bg-cyan-600",
      showInTimeline: 3, 
    },
    {
      id: 8,
      name: "Senhas Automáticas",
      progress: 75,
      status: "test",
      startDate: "08/04/2025",
      endDate: "30/06/2025",
      color: "bg-cyan-600",
      showInTimeline: 3,
    },
    {
      id: 9,
      name: "Termo automático",
      progress: 100,
      status: "test",
      startDate: "12/04/2025",
      endDate: "13/06/2025",
      color: "bg-blue-400",
      showInTimeline: 3,
    },
    {
      id: 10,
      name: "VAR OFF",
      progress: 100,
      status: "done",
      startDate: "02/05/2025",
      endDate: "16/07/2025",
      color: "bg-cyan-700",
      showInTimeline: 1,
    },
    {
      id: 11,
      name: "VAR Mobile",
      progress: 100,
      status: "done",
      startDate: "20/04/2025",
      endDate: "23/06/2025",
      color: "bg-blue-800",
      showInTimeline: 3, 
    },
    {
      id: 12,
      name: "Automação de testes",
      progress: 40,
      status: "active",
      startDate: "23/06/2025",
      endDate: "04/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
    },
    {
      id: 13,
      name: "Tesouraria",
      progress: 60,
      status: "active",
      startDate: "01/07/2025",
      endDate: "13/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
    },
    {
      id: 14,
      name: "MFA",
      progress: 40,
      status: "active",
      startDate: "01/07/2025",
      endDate: "19/09/2025",
      color: "bg-blue-800",
      showInTimeline: 1, 
    },
    {
      id: 15,
      name: "Cartões",
      progress: 46,
      status: "active",
      startDate: "01/07/2025",
      endDate: "19/09/2025",
      color: "bg-blue-800",
      showInTimeline: 3,
    },
    {
      id: 16,
      name: "API CAV",
      progress: 100,
      status: "test",
      startDate: "01/07/2025",
      endDate: "19/09/2025",
      color: "bg-blue-800",
      showInTimeline: 3,
    },
        {
      id: 17,
      name: "Sabadão Mobile",
      progress: 0,
      status: "test",
      startDate: "21/07/2025",
      endDate: "04/08/2025",
      color: "bg-blue-800",
      showInTimeline: 1,
    },
  ]


  const advances = [
    "Testes na API Venda Mercantil quase finalizados",
    "Piloto da Engine com erros reduzidos",
    "Rápido avanço no Hub SSO",
    "Possíveis causas da lentidão na conciliação identificadas"
  ]

  const attentionPoints = [
    "Problemas pontuais surgindo no Piloto da Engine",
    "Conciliação lenta e reprocessamento travado",
    "Versionamento do InVoicy na Engine"
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
    const ganttEnd = new Date(latestEnd.getFullYear(), latestEnd.getMonth() + 1, 0) 

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Projects in Progress */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
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
              {projectsInProgress.map((project) => (
                <div key={project.id} className="space-y-2">
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
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Future Opportunities */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Lightbulb className="h-5 w-5 text-green-600" />
                Oportunidades futuras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {futureOpportunities.map((opportunity, index) => (
                <div key={index} className="space-y-2 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">{opportunity.title}</h4>
                  <p className="text-sm text-green-700 leading-relaxed">{opportunity.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
