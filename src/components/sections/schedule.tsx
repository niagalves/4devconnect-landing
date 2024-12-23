import { Button } from '../button';
import { Heading } from '../heading';
import { Paragraph } from '../paragraph';
import { Talk, type TalkProps } from '../talk';

export type ScheduleProps = {
  talks: TalkProps[];
};

function Schedule({ talks }: ScheduleProps) {
  return (
    <section
      className="flex w-full justify-center gap-10 px-6 md:px-4 py-11 bg-white"
      id="programacao"
    >
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full max-w-6xl justify-between">
        <div className="flex flex-col gap-6 md:pt-20" id="cfp">
          <Heading level="h1" className="md:text-left max-w-72">
            Programação do evento
          </Heading>
          <Paragraph className="max-w-80">
            Confira a programação de palestras prevista para o dia 14 de
            dezembro:
          </Paragraph>
          <div className="flex flex-col items-start gap-4">
            <Paragraph>Quer palestrar no evento?</Paragraph>
            <Button
              disabled
              href="/"
              variant="secondary"
              name="Inscrições encerradas"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 md:min-w-[460px]">
          <div className="flex flex-col items-start">
            {talks.map((talk, index) => (
              <Talk key={index} {...talk} />
            ))}
          </div>
          <p className="text-primary/50 text-xs/4 w-full max-w-80">
            * Os horários e as informações estão sujeitos a alterações sem aviso
            prévio até o dia do evento.
          </p>
        </div>
      </div>
    </section>
  );
}

export { Schedule };
