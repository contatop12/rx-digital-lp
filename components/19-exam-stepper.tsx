export type ExamStep = { title: string; description: string }

type ExamStepperProps = {
  heading: string
  intro?: string
  steps: ExamStep[]
  sectionClassName?: string
}

export function ExamStepper({
  heading,
  intro,
  steps,
  sectionClassName = "py-20 bg-background",
}: ExamStepperProps) {
  return (
    <section className={sectionClassName} aria-labelledby="exam-stepper-heading">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="exam-stepper-heading" className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            {heading}
          </h2>
          {intro ? (
            <p className="text-lg text-muted-foreground">{intro}</p>
          ) : null}
        </div>

        <ol className="relative mx-auto max-w-2xl list-none space-y-0 pl-0" role="list">
          {steps.map((step, index) => (
            <li key={`${index}-${step.title}`} className="relative flex gap-6 pb-10 last:pb-0">
              {index < steps.length - 1 ? (
                <div
                  className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-primary/30"
                  aria-hidden
                />
              ) : null}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background text-sm font-bold text-primary">
                {index + 1}
              </div>
              <div className="min-w-0 pt-0.5">
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
