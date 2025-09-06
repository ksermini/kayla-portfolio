import openaiRag from "./providers/openaiRag";
import claudeRag from "./providers/claudeRag";

const PROVIDERS = { openai: openaiRag, claude: claudeRag };

export function createRagService(providerKey, deps) {
  const factory = PROVIDERS[providerKey];
  if (!factory) throw new Error(`RAG provider '${providerKey}' not found`);
  return factory(deps);
}
