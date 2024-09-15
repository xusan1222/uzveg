import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Introduction = () => {
  return (
    <section className="pb-8 sm:pt-0 lg:pt-24 bg-gray-50">
      <div className="container mx-auto max-w-4xl text-center relative z-2">
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-green-900">
              <span className="text-green-600">Veguz</span>ga xush kelibsiz!
            </CardTitle>
            <CardDescription className="mt-4 text-lg text-gray-600">
            Bizning maqsadimiz – sog&apos;lom, rahm-shafqatli turmush tarzini o plant-based ovqatlanish orqali targ&apos;ib qilish. Siz uzoq vaqt davomida vegansizmi yoki yangi boshlagan bo&apos;lsangiz ham, biz sizni mazali retseptlar, restoran tavsiyalari va foydali resurslar bilan yo&apos;naltirish uchun shu yerdamiz.
            </CardDescription>
          </CardHeader>
          <div className="mt-8 space-y-4">
            <Button variant="default" size="lg" className="w-full md:w-auto">
              Biz haqimizda
            </Button>
            <Button variant="outline" size="lg" className="w-full md:w-auto">
              Jamiyatimizga qo&apos;shiling
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Introduction;
