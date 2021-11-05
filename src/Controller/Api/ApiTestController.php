<?php declare(strict_types=1);

namespace Epoq\Personalization\Controller\Api;
use Shopware\Core\Framework\Routing\Annotation\RouteScope;
use Shopware\Core\Framework\Validation\DataBag\RequestDataBag;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @RouteScope(scopes={"administration"})
 */
class ApiTestController
{
    /**
     * @Route(path="/api/_action/epoq-api-test/verify")
     */
    public function check(RequestDataBag $dataBag): JsonResponse
    {
        $success = false;

        $tenantId = $dataBag->get('tenantId');
        if ($tenantId) {
            $success = $this->urlExists($tenantId);
        }

        return new JsonResponse(['success' => $success]);
    }

    private function urlExists(string $tenantId): bool
    {
        $url = "https://cdn.epoq.de/flow/$tenantId.js";

        $headers = get_headers($url);

        return (bool) stripos($headers[0], "200 OK");
    }
}
