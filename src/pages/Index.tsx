import { useState } from "react";
import { ArrowUpRight, Trophy, Activity, Users, Sparkles, Route, Library, ChartNoAxesCombined, Smartphone, Play } from "lucide-react";
import content from "@/content/home.json";
import "./Home.css";

type ScreenName = keyof typeof content.screens;
type Feature = keyof typeof content.features;

function Screen({ name, eager = false }: { name: ScreenName; eager?: boolean }) {
  const screen = content.screens[name];
  return <img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height}
    loading={eager ? "eager" : "lazy"} decoding="async" />;
}

export default function Index() {
  const [feature, setFeature] = useState<Feature>("workout");
  const featureCopy = content.features[feature];
  const copy = content.copy;
  return (
<div id="bldr-home">
  <nav className="bn">
    <a href="#bldr-top" aria-label="BLDR início" className="brand">
      <span className="official-mark">
        <img src={content.brand.logo.src} alt={content.brand.logo.alt} width={2000} height={2000} />
      </span>
      <span className="brand-sign">
        {copy.construa_sua_melhor_versao}
      </span>
    </a>
    <div className="navlinks">
      <a href="#bldr-system">
        {copy.o_aplicativo}
      </a>
      <a href="#bldr-havok">
        {copy.havok}
      </a>
      <a href="#bldr-club">
        {copy.club}
      </a>
    </div>
    <a className="navcta" href="#bldr-download">
      {copy.baixar_o_app}
    </a>
  </nav>
  <a className="skip-link" href="#main-content">
    {copy.pular_para_o_conteudo}
  </a>
  <main id="main-content">
    <section className="hero hero-impact" id="bldr-top">
      <div className="hero-copy">
        <div className="eyebrow">{copy.treino_nutricao_evolucao}</div>
        <h1>
          {content.brand.headline.first}<br />
          <span>{content.brand.headline.emphasis}</span>
        </h1>
        <p>{copy.treinos_nutricao_e_progresso_conectados_para}</p>
        <div className="actions hero-stores">
          <a className="store" href={content.stores.apple} target="_blank" rel="noopener noreferrer">
            <Smartphone aria-hidden="true" />
            <span><small>{copy.baixar_na}</small>{copy.app_store}</span>
          </a>
          <a className="store" href={content.stores.google} target="_blank" rel="noopener noreferrer">
            <Play aria-hidden="true" />
            <span><small>{copy.disponivel_no}</small>{copy.google_play}</span>
          </a>
        </div>
        <a className="hero-explore" href="#bldr-system">{copy.conheca_o_bldr} <span aria-hidden="true">↓</span></a>
      </div>
      <div className="hero-showcase" aria-label="Telas completas do aplicativo BLDR">
        {content.heroShowcase.map(({ screen, emphasis }) => (
          <figure key={screen} className={emphasis ? "showcase-main" : "showcase-side"}>
            <Screen name={screen as ScreenName} eager />
          </figure>
        ))}
      </div>
    </section>
    <div className="manifesto-strip">
      <span>
        {copy.o_plano_e_seu}
      </span>
      <b>
        {copy.separador}
      </b>
      <span>
        {copy.a_constancia_e_sua}
      </span>
      <b>
        {copy.separador}
      </b>
      <span>
        {copy.a_evolucao_tambem}
      </span>
    </div>
    <section className="section system" id="bldr-system">
      <div className="sectionintro">
        <div>
          <div className="eyebrow">
            {copy.sua_rotina_com_mais_clareza}
          </div>
          <h2>
            {copy.saiba_o_que_fazer}
            <br />
            <span>
              {copy.veja_o_que_mudou}
            </span>
          </h2>
        </div>
        <p>
          {copy.planejamento_registro_e_historico_conectados_para}
        </p>
      </div>
      <div className="explorer">
        <div className="choices" aria-label="Explore os recursos do aplicativo">
          <button type="button" className="choice" onClick={() => setFeature("workout" )} aria-pressed={feature === "workout"}>
            <span>
              {copy.texto_01_treinos}
            </span>
            <strong>
              {copy.chegue_para_treinar_com_um_plano}
            </strong>
            <small>
              {copy.organize_sua_semana_e_encontre_o}
            </small>
            <ArrowUpRight aria-hidden="true" />
          </button>
          <button type="button" className="choice" onClick={() => setFeature("nutrition" )} aria-pressed={feature === "nutrition"}>
            <span>
              {copy.texto_02_nutricao}
            </span>
            <strong>
              {copy.entenda_como_foi_sua_alimentacao}
            </strong>
            <small>
              {copy.acompanhe_refeicoes_calorias_macros_e_agua}
            </small>
            <ArrowUpRight aria-hidden="true" />
          </button>
          <button type="button" className="choice" onClick={() => setFeature("progress" )} aria-pressed={feature === "progress"}>
            <span>
              {copy.texto_03_progresso}
            </span>
            <strong>
              {copy.compare_seu_desempenho_ao_longo_do}
            </strong>
            <small>
              {copy.veja_volume_de_treino_recordes_e}
            </small>
            <ArrowUpRight aria-hidden="true" />
          </button>
        </div>
        <div className="feature-detail" aria-live="polite">
          <span id="detail-label" className="screen-label">{featureCopy.label}</span>
          <div className="detail-crop">
            <Screen name={feature} eager />
          </div>
          <div className="detail-caption" id="detail-caption">
            {featureCopy.caption}
          </div>
        </div>
      </div>
    </section>
    <section className="section levelsection">
      <div className="profile-detail">
        <div className="detail-top">
          <span>
            {copy.sua_jornada_ganha_forma}
          </span>
          <Trophy aria-hidden="true" />
        </div>
        <div className="profile-crop">
          <Screen name="profile" />
        </div>
      </div>
      <div>
        <div className="eyebrow">
          {copy.cada_dia_conta}
        </div>
        <h2>
          {copy.performance}
          <br />
          <span>
            {copy.e_um_jogo}
          </span>
        </h2>
        <p>
          {copy.treinos_registrados_viram_historia_niveis_conquistas}
        </p>
        <p>
          {copy.voce_acompanha_o_caminho_que_ja}
        </p>
        <div className="signature-line">
          {copy.construa_sua_melhor_versao}
          <span>
            {copy.um_dia_de_cada_vez}
          </span>
        </div>
      </div>
    </section>
    <section className="section havoksection" id="bldr-havok">
      <div>
        <div className="eyebrow">
          {copy.inteligencia_com_contexto}
        </div>
        <h2>
          {copy.seus_dados}
          <br />
          {copy.uma_conversa}
          <br />
          <span>
            {copy.havok_2}
          </span>
        </h2>
        <p>
          {copy.leve_suas_duvidas_sobre_treino_e}
        </p>
        <div className="example-question">
          {copy.estou_pronto_para_treinar_pesado_hoje}
        </div>
        <p className="smalltext">
          {copy.uma_pergunta_simples_pode_abrir_espaco}
        </p>
      </div>
      <figure className="havok-focus">
        <div className="havok-crop">
          <Screen name="havok" />
        </div>
      </figure>
    </section>
    <section className="section movement">
      <div className="sectionintro">
        <div>
          <div className="eyebrow">
            {copy.sua_vida_em_movimento}
          </div>
          <h2>
            {copy.alem_da_academia}
            <br />
            <span>
              {copy.ao_lado_de_outras_pessoas}
            </span>
          </h2>
        </div>
      </div>
      <div className="movement-grid">
        <article>
          <div className="movement-copy">
            <Activity aria-hidden="true" />
            <h3>
              {copy.seu_esporte_tambem_faz_parte}
            </h3>
            <p>
              {copy.encontre_corrida_caminhada_ciclismo_timers_e}
            </p>
          </div>
          <div className="sports-crop">
            <Screen name="sports" />
          </div>
        </article>
        <article>
          <div className="movement-copy">
            <Users aria-hidden="true" />
            <h3>
              {copy.compartilhe_o_que_voce_constroi}
            </h3>
            <p>
              {copy.publique_treinos_e_avancos_acompanhe_outras}
            </p>
          </div>
          <div className="community-crop">
            <Screen name="community" />
          </div>
        </article>
      </div>
    </section>
    <section className="section club" id="bldr-club">
      <div className="club-intro">
        <div className="eyebrow">
          {copy.bldr_club}
        </div>
        <h2>
          {copy.mais_recursos}
          <br />
          <span>
            {copy.mais_caminhos_para_evoluir}
          </span>
        </h2>
        <p>
          {copy.amplie_sua_experiencia_com_inteligencia_ferramentas}
        </p>
        <a className="goldbutton" href="#bldr-download">
          {copy.explorar_o_club_no_app}
          <ArrowUpRight aria-hidden="true" />
        </a>
        <small>
          {copy.consulte_os_planos_e_os_recursos}
        </small>
      </div>
      <div className="club-benefits">
        <div>
          <Sparkles aria-hidden="true" />
          <span>
            <strong>
              {copy.havok_e_chef_ia}
            </strong>
            <small>
              {copy.apoio_para_explorar_treinos_e_ideias}
            </small>
          </span>
        </div>
        <div>
          <Route aria-hidden="true" />
          <span>
            <strong>
              {copy.esportes_e_corrida}
            </strong>
            <small>
              {copy.mais_ferramentas_para_acompanhar_suas_atividades}
            </small>
          </span>
        </div>
        <div>
          <Library aria-hidden="true" />
          <span>
            <strong>
              {copy.biblioteca_de_treinos}
            </strong>
            <small>
              {copy.mais_opcoes_para_planejar_a_sua}
            </small>
          </span>
        </div>
        <div>
          <ChartNoAxesCombined aria-hidden="true" />
          <span>
            <strong>
              {copy.analises_da_sua_evolucao}
            </strong>
            <small>
              {copy.mais_detalhes_para_acompanhar_o_caminho}
            </small>
          </span>
        </div>
      </div>
    </section>
    <section className="section faq">
      <div>
        <div className="eyebrow">
          {copy.antes_do_primeiro_passo}
        </div>
        <h2>
          {copy.ficou_alguma}
          <br />
          <span>
            {copy.duvida}
          </span>
        </h2>
      </div>
      <div className="questions">
        <details open>
          <summary>
            {copy.preciso_assinar_para_comecar}
          </summary>
          <p>
            {copy.voce_pode_comecar_gratuitamente_o_bldr}
          </p>
        </details>
        <details>
          <summary>
            {copy.o_bldr_e_so_para_quem}
          </summary>
          <p>
            {copy.o_aplicativo_reune_treinos_nutricao_progresso}
          </p>
        </details>
        <details>
          <summary>
            {copy.o_havok_substitui_acompanhamento_profissional}
          </summary>
          <p>
            {copy.nao_havok_e_uma_inteligencia_artificial}
          </p>
        </details>
        <details>
          <summary>
            {copy.onde_posso_baixar_o_aplicativo}
          </summary>
          <p>
            {copy.o_bldr_esta_disponivel_para_ios}
          </p>
        </details>
      </div>
    </section>
    <section className="section closing" id="bldr-download">
      <div className="eyebrow">
        {copy.o_proximo_passo_e_seu}
      </div>
      <h2>
        {copy.comece_com_um_dia}
        <br />
        <span>
          {copy.construa_a_sua_evolucao}
        </span>
      </h2>
      <p>
        {copy.seu_treino_sua_rotina_sua_proxima}
      </p>
      <div className="actions">
        <a className="store" href={content.stores.apple} target="_blank" rel="noopener noreferrer">
          <Smartphone aria-hidden="true" />
          <span>
            <small>
              {copy.baixar_na}
            </small>
            {copy.app_store}
          </span>
        </a>
        <a className="store" href={content.stores.google} target="_blank" rel="noopener noreferrer">
          <Play aria-hidden="true" />
          <span>
            <small>
              {copy.disponivel_no}
            </small>
            {copy.google_play}
          </span>
        </a>
      </div>
      <div className="closing-sign">
        {copy.bldr_construa_sua_melhor_versao}
      </div>
    </section>
  </main>
  <footer>
    <a className="brand" href="#bldr-top">
      <span className="official-mark">
        <img src={content.brand.logo.src} alt={content.brand.logo.alt} width={2000} height={2000} />
      </span>
      <span className="brand-sign">
        {copy.construa_sua_melhor_versao}
      </span>
    </a>
    <span>
      © {new Date().getFullYear()} BLDR · CNPJ: 62.211.700/0001-82
    </span>
    <div>
      <a href="/sobre">
        {copy.sobre_o_bldr}
      </a>
      <a href="/seguranca">
        {copy.seguranca}
      </a>
      <a href="/termos">
        {copy.termos}
      </a>
      <a href="/privacidade">
        {copy.privacidade}
      </a>
      <a href="/contato">
        {copy.contato}
      </a>
    </div>
  </footer>
</div>
  );
}
