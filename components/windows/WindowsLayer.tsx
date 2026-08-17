import { Window } from "./Window";
import { AboutContent } from "./AboutContent";
import { WorkContent } from "./WorkContent";
import { ProcessContent } from "./ProcessContent";
import { ContactContent } from "./ContactContent";

export function WindowsLayer() {
  return (
    <>
      <Window id="about">
        <AboutContent />
      </Window>
      <Window id="work">
        <WorkContent />
      </Window>
      <Window id="process">
        <ProcessContent />
      </Window>
      <Window id="contact">
        <ContactContent />
      </Window>
    </>
  );
}
