import { supabase } from '../database/supabase';

export async function getAllResponses(
    // email: string
): Promise<any | null> {
      const select = await supabase
        .from('quiz_responses')
        .select()
        .order('created_at', { ascending: false });
      console.log(select)
      if (select.data !== null) return select.data
      if (select.data === null) return null
  
  }

  export async function getCooperativeResponses(
    coop_id: string
  ): Promise<any | null> {
      const select = await supabase
        .from('quiz_responses')
        .select().eq('coop_id', coop_id)
        .order('created_at', { ascending: false });
      console.log(select.data, '@')
      if (select.data !== null) return select.data[0]
      if (select.data === null) return null
  }

  export async function createNewResponse(
    data: any
  ): Promise<any | null> {
    const insert = await supabase
    .from('quiz_responses')
    .insert(
      {
        "coop_id": data.coop_id,
        "result_": data.result_,
        "responses": data.responses,
        "associated": data.associated,
      }
    )
    if (insert.data !== null) return insert.data[0]
    if (insert.data === null) return null
  }


